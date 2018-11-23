// @flow

import { css } from 'emotion';
import type { Styler } from './types';

export const COMPONENT_PATH_PROP_NAME = 'compPath';
export const STRIP_PROPS_PROP_NAME = 'stripProps';
export const STYLERS_PROP_NAME = 'stylers';

type Cache = {
  get(name: string): any,
  set(name: string, value: any): any,
};

type Options = {
  cache: Cache,
  cacheKeyFn?: (props: Object, cacheProps: Array<string>, namespace?: Array<string>) => string,
  componentStyles: { [componentName: string]: Array<Styler<any>> },
  globalStyles: Array<Styler<any>>,
};

type ComponentOptions = {
  cacheProps?: Array<string>,
  // should we only pass styles through
  // or should we generate style?
  passthrough?: boolean,
  stripProps?: Array<string>,
  styles?: Array<Styler<any>>,
};

type StyleApplicator = {
  applyStyles: (
    componentName: string,
    props: Object,
    system: System,
    componentOptions?: ComponentOptions,
  ) => [Object, Array<string>, Array<Styler<any>>],
};

function generateCacheKey(props, cacheProps, namespace?: Array<string> = []) {
  if (namespace.length === 0) {
    return JSON.stringify(props, cacheProps);
  }

  return JSON.stringify([props, namespace], cacheProps);
}

function applyStyles(
  props: Object,
  system: { theme: Theme, viewport: number },
  styles: Array<Styler<any>>,
): string {
  return css(
    styles.reduce((result, style) => {
      const appliedStyle = style.apply(props, system);

      return [...result, typeof appliedStyle === 'object' ? css(appliedStyle) : appliedStyle];
    }, []),
  );
}

export default function createStyleApplicator({
  cache,
  componentStyles: componentStylesRegistry,
  cacheKeyFn = generateCacheKey,
  globalStyles,
}: Options): StyleApplicator {
  const systemCacheProps = [].concat(...globalStyles.map(styler => styler.propNames));
  const systemStripProps = [
    COMPONENT_PATH_PROP_NAME,
    STRIP_PROPS_PROP_NAME,
    STYLERS_PROP_NAME,
  ].concat(...globalStyles.map(styler => styler.stripProps));

  Object.keys(componentStylesRegistry).forEach(componentName =>
    componentStylesRegistry[componentName].forEach(styler => {
      systemCacheProps.push(...styler.propNames);
      systemStripProps.push(...styler.stripProps);
    }),
  );

  return {
    applyStyles: (
      componentName,
      props,
      system,
      {
        cacheProps: componentCacheProps = [],
        passthrough = false,
        stripProps: componentStripProps = [],
        styles: componentStyles = [],
      } = {},
    ) => {
      const compPath = props.compPath ? [...props.compPath, componentName] : [componentName];
      const parentStripProps = props.stripProps || systemStripProps;
      const parentStylers = props.stylers || [];
      let className = props.className || '';

      // if passthrough is defined, it means that this component is not final in render tree
      // and won't be rendered to HTML
      // in that case we don't need to generate style
      // but rather send styles down the tree
      if (!passthrough) {
        // first we need to generate local styles for component
        // if there are styles for component
        // generate the class name for them
        if (componentStyles.length > 0) {
          // cache only props length is more than 0
          const styleKey =
            componentCacheProps.length > 0 ? cacheKeyFn(props, componentCacheProps, compPath) : '';
          let componentClsName = cache.get(styleKey);

          if (componentClsName == null) {
            componentClsName = applyStyles(props, system, componentStyles);

            if (styleKey) {
              cache.set(styleKey, componentClsName);
            }
          }

          className = className ? `${className} ${componentClsName}` : componentClsName;
        }

        // first look if we have styles
        const key = cacheKeyFn(props, systemCacheProps);

        let stylesClassName = cache.get(key);

        if (stylesClassName == null) {
          stylesClassName = cache.set(
            key,
            applyStyles(props, system, [
              ...globalStyles,
              ...(componentStyles[componentName] || []),
            ]),
          );
        }

        // if there is a className in props, extend it
        className = className ? `${className} ${stylesClassName}` : stylesClassName;
      }

      const stylers = [...parentStylers, ...componentStyles];
      const stripProps = [...parentStripProps, ...componentStripProps];

      // if there are stripProps in props, extend final stripProps
      return { ...props, className, compPath, stylers, stripProps };
    },
  };
}
