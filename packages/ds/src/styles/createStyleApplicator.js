// @flow

import { css } from 'emotion';
import type { Styler } from './types';

type Cache = {
  get(name: string): any,
  set(name: string, value: any): any,
};

type Options = {
  cache: Cache,
  cacheKeyFn?: (props: Object, cacheProps: Array<string>) => string,
  componentStyles: { [componentName: string]: Array<Styler<any>> },
  globalStyles: Array<Styler<any>>,
};

type ComponentOptions = {
  cacheProps?: Array<string>,
  stripProps?: Array<string>,
  style?: string | Object | ((props: Object) => string),
};

type StyleApplicator = {
  applyStyles: (
    componentName: string,
    props: Object,
    system: System,
    componentOptions?: ComponentOptions,
  ) => [Object, Array<string>],
  stripProps: Array<string>,
};

function generateCacheKey(props, cacheProps) {
  return JSON.stringify(props, cacheProps);
}

export default function createStyleApplicator({
  cache,
  componentStyles,
  cacheKeyFn = generateCacheKey,
  globalStyles,
}: Options): StyleApplicator {
  const cacheProps = [].concat(...globalStyles.map(styler => styler.propNames));
  const stripProps = ['stripProps'].concat(...globalStyles.map(styler => styler.stripProps));

  Object.keys(componentStyles).forEach(componentName =>
    componentStyles[componentName].forEach(styler => {
      cacheProps.push(...styler.propNames);
      stripProps.push(...styler.stripProps);
    }),
  );

  return {
    applyStyles: (
      componentName,
      props,
      system,
      {
        cacheProps: componentCacheProps = [],
        stripProps: componentStripProps = [],
        style: componentStyle,
      } = {},
    ) => {
      // first look if we have styles
      const key = cacheKeyFn(props, cacheProps);

      let className = cache.get(key);

      if (className == null) {
        const clsName = css(
          [...globalStyles, ...(componentStyles[componentName] || [])].reduce((result, style) => {
            const appliedStyle = style.apply(props, system);

            return [...result, typeof appliedStyle === 'object' ? css(appliedStyle) : appliedStyle];
          }, []),
        );

        className = cache.set(key, clsName);

        // if there are styles for component
        // generate the class name for them
        if (componentStyle != null) {
          const styleKey =
            componentCacheProps.length > 0 ? cacheKeyFn(props, componentCacheProps) : '';
          let componentClassName = cache.get(styleKey);

          if (componentClassName == null) {
            if (typeof componentStyle === 'string' || typeof componentStyle === 'object') {
              componentClassName = cache.set(styleKey, css(componentStyle));
            } else {
              componentClassName = cache.set(styleKey, css(componentStyle(props)));
            }
          }

          if (componentClassName) {
            className = `${className} ${componentClassName}`;
          }
        }
      }

      // if there is a className in props, extend it
      className = props.className ? `${props.className} ${className}` : className;

      // if there are stripProps in props, extend final stripProps
      return [
        { ...props, className },
        [...(props.stripProps || stripProps), ...componentStripProps],
      ];
    },
    stripProps,
  };
}
