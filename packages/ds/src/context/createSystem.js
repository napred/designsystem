// @flow

import defaultTheme from '../defaultTheme';
import type { System } from './types';
import { applyStyles as styleApplicator, styles, type Styler } from '../styles';
import type { Theme } from '../theme';

type Options = {
  baseStyles?: Array<Styler<any>>,
  componentStyles?: { [componentName: string]: Array<Styler<any>> },
  extraStyles?: Array<Styler<any>>,
  theme?: Theme,
  viewport?: number,
};

const defaultBaseStyles = Object.keys(styles).map(name => styles[name]);

export default function createSystem({
  baseStyles = defaultBaseStyles,
  componentStyles = {},
  extraStyles = [],
  theme = defaultTheme,
  viewport = 0,
}: Options = {}): System & { applyStyles(componentName: string, props: Object): string } {
  // if styles has more than 1 prop name, extra prop names are considered as additional prop names
  // to refine styles, but they can't work as standalone props

  const baseStylesMap: Map<string, Styler> = new Map(
    baseStyles.map(baseStyler => [baseStyler.propNames[0], baseStyler]),
  );
  // these are extra component stylers
  const componentStylesMap: Map<string, Map<string, Styler>> = Object.keys(componentStyles).reduce(
    (stylers, componentName) => {
      const componentStylers = componentStyles[componentName];

      stylers.add(
        componentName,
        componentStylers.map(componentStyler => [componentStyler.propNames[0], componentStyler]),
      );

      return stylers;
    },
    new Map(),
  );
  // these are extra global stylers
  const extraStylesMap: Map<string, Styler> = new Map(
    extraStyles.map(extraStyler => [extraStyler.propNames[0], extraStyler]),
  );

  const system = {
    get: theme.get,
    viewport,
  };

  function applyStyles(componentName: string, props: Object): string {
    // first we apply base stylers and extra stylers
    // then we apply component stylers
    const baseCss = styleApplicator(props, baseStylesMap, system);
    const extraCss = extraStylesMap.size > 0 ? styleApplicator(props, extraStylesMap, system) : '';
    const componentCss = componentStylesMap.has(componentName)
      ? styleApplicator(props, componentStylesMap.get(componentName), system)
      : '';

    return `${baseCss} ${extraCss} ${componentCss}`.trim();
  }

  return {
    applyStyles,
    ...system,
  };
}
