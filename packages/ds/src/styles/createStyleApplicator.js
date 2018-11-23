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
      let className = '';

      // first we need to generate local styles for component
      // if there are styles for component
      // generate the class name for them
      if (componentStyle != null) {
        // cache only props length is more than 0
        const styleKey =
          componentCacheProps.length > 0 ? cacheKeyFn(props, componentCacheProps) : null;
        className = styleKey ? cache.get(styleKey) : '';

        if (className == null) {
          if (typeof componentStyle === 'string' || typeof componentStyle === 'object') {
            className = cache.set(styleKey, css(componentStyle));
          } else {
            className = cache.set(styleKey, css(componentStyle(props)));
          }
        }
      }

      // first look if we have styles
      const key = cacheKeyFn(props, cacheProps);

      let stylesClassName = cache.get(key);

      if (stylesClassName == null) {
        const clsName = css(
          [...globalStyles, ...(componentStyles[componentName] || [])].reduce((result, style) => {
            const appliedStyle = style.apply(props, system);

            return [...result, typeof appliedStyle === 'object' ? css(appliedStyle) : appliedStyle];
          }, []),
        );

        stylesClassName = cache.set(key, clsName);
      }

      // if there is a className in props, extend it
      className = (props.className
        ? `${props.className} ${className} ${stylesClassName}`
        : `${className} ${stylesClassName}`
      ).trim();

      // if there are stripProps in props, extend final stripProps
      return [
        { ...props, className },
        [...(props.stripProps || stripProps), ...componentStripProps],
      ];
    },
    stripProps,
  };
}
