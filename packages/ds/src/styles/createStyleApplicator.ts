import { css, Interpolation } from 'emotion';
import { IStyleApplicator, IStyler, ITheme, StyleApplicatorFactory } from '../types';

export const COMPONENT_PATH_PROP_NAME = 'compPath';
export const STRIP_PROPS_PROP_NAME = 'stripProps';
export const STYLERS_PROP_NAME = 'stylers';

function generateCacheKey(
  props: { [key: string]: any },
  cacheProps: string[],
  viewport: number,
  namespace: string[] = [],
): string {
  if (namespace.length === 0) {
    return JSON.stringify([props, viewport], cacheProps);
  }

  return JSON.stringify([props, viewport, namespace], cacheProps);
}

function applyStyles(
  props: { [key: string]: any },
  system: { theme: ITheme; viewport: number },
  styles: Array<IStyler<any>>,
): string {
  return css(
    styles.reduce(
      (result, style) => {
        const appliedStyle = style.apply(props, system);

        return [...result, typeof appliedStyle === 'object' ? css(appliedStyle) : appliedStyle];
      },
      [] as Interpolation[],
    ),
  );
}

interface IUsedStyleProps {
  className: string;
}

const factory: StyleApplicatorFactory = function createStyleApplicator({
  cache,
  componentStyles: componentStylesRegistry,
  cacheKeyFn = generateCacheKey,
  globalStyles,
}): IStyleApplicator<IUsedStyleProps> {
  const systemCacheProps = ([] as string[]).concat(...globalStyles.map(styler => styler.propNames));
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
    apply: (
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
      const {
        className: parentClassName,
        compPath = [],
        stylers = [],
        stripProps = systemStripProps,
        ...restProps
      } = props as any; // temporary workaround because
      // merge passthrough stylers with component stylers
      const localStylers = [...stylers, ...componentStyles];
      const localComponentPath = [...(compPath as string[]), componentName];
      let className: string = (parentClassName as null | string) || '';

      // if passthrough is defined, it means that this component is not final in render tree
      // and won't be rendered to HTML
      // in that case we don't need to generate style
      // but rather send styles down the tree
      if (!passthrough) {
        // first we need to generate local styles for component
        // if there are styles for component
        // generate the class name for them
        if (localStylers.length > 0) {
          // cache only props length is more than 0
          const styleKey =
            componentCacheProps.length > 0
              ? cacheKeyFn(props, componentCacheProps, system.viewport, compPath)
              : '';
          let componentClsName = cache.get(styleKey);

          if (componentClsName == null) {
            componentClsName = applyStyles(props, system, localStylers);

            if (styleKey) {
              cache.set(styleKey, componentClsName);
            }
          }

          className = className ? `${className} ${componentClsName}` : componentClsName;
        }

        // first look if we have styles
        const key = cacheKeyFn(props, systemCacheProps, system.viewport);

        let stylesClassName = cache.get(key);

        if (stylesClassName == null) {
          stylesClassName = cache.set(
            key,
            applyStyles(props, system, [
              ...globalStyles,
              ...(componentStylesRegistry[componentName] || []),
            ]),
          );
        }

        // if there is a className in props, extend it
        className = className ? `${className} ${stylesClassName}` : stylesClassName;
      }

      return {
        ...(restProps || {}),
        className,
        compPath: localComponentPath,
        stripProps: [...stripProps, ...componentStripProps],
        stylers: localStylers,
      };
    },
  };
};

export default factory;
