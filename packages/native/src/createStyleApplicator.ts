import { StyleApplicatorFactory } from '@napred/ds';
import { RegisteredStyle } from 'react-native';
import applyStyles from './applyStyles';
import { StyleDefinition } from './types';

export const COMPONENT_PATH_PROP_NAME = 'compPath';
export const STRIP_PROPS_PROP_NAME = 'stripProps';
export const STYLERS_PROP_NAME = 'stylers';

interface INativeStyle {
  [className: string]: RegisteredStyle<any>;
}

function generateCacheKey(
  props: { [key: string]: any },
  cacheProps: string[],
  viewport: number,
  namespace: string[] = [],
  componentName: string = '',
): string {
  if (namespace.length === 0) {
    return JSON.stringify([props, viewport, componentName], cacheProps);
  }

  return JSON.stringify([props, viewport, namespace, componentName], cacheProps);
}

interface IUsedStyleProps {
  style: INativeStyle | INativeStyle[];
}

const factory: StyleApplicatorFactory<
  StyleDefinition,
  IUsedStyleProps
> = function createStyleApplicator({
  cache,
  componentStyles: componentStylesRegistry,
  cacheKeyFn = generateCacheKey,
  globalStyles,
}) {
  const systemCacheProps = ([] as string[]).concat(
    ...globalStyles.map(styler => styler.propNames as string[]),
  );
  const systemStripProps = [
    COMPONENT_PATH_PROP_NAME,
    STRIP_PROPS_PROP_NAME,
    STYLERS_PROP_NAME,
  ].concat(...globalStyles.map(styler => styler.stripProps as string[]));

  Object.keys(componentStylesRegistry).forEach(componentName =>
    componentStylesRegistry[componentName].forEach(styler => {
      systemCacheProps.push(...(styler.propNames as string[]));
      systemStripProps.push(...(styler.stripProps as string[]));
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
        style: parentStyle,
        compPath = [],
        stylers = [],
        stripProps = systemStripProps,
        ...restProps
      } = props as any; // temporary workaround because
      // merge passthrough stylers with component stylers
      const localStylers = [...stylers, ...componentStyles];
      const localComponentPath = [...(compPath as string[]), componentName];
      const style: INativeStyle[] =
        parentStyle == null ? [] : [...(Array.isArray(parentStyle) ? parentStyle : [parentStyle])];

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
              ? cacheKeyFn(props, componentCacheProps, system.viewport, compPath, componentName)
              : '';
          let componentStyleSheet = cache.get<INativeStyle>(styleKey);

          if (componentStyleSheet == null) {
            componentStyleSheet = applyStyles(props, system, localStylers);

            if (styleKey) {
              cache.set(styleKey, componentStyleSheet);
            }
          }

          style.push(componentStyleSheet.default);
        }

        // first look if we have styles
        const key = cacheKeyFn(props, systemCacheProps, system.viewport, ['$system']);

        let systemStylesStyleSheet = cache.get<INativeStyle>(key);

        if (systemStylesStyleSheet == null) {
          systemStylesStyleSheet = cache.set(
            key,
            applyStyles(props, system, [
              ...globalStyles,
              ...(componentStylesRegistry[componentName] || []),
            ]),
          );
        }

        style.push(systemStylesStyleSheet.default);
      }

      return {
        ...(restProps || {}),
        compPath: localComponentPath,
        stripProps: [...stripProps, ...componentStripProps],
        style,
        stylers: localStylers,
      };
    },
  };
};

export default factory;
