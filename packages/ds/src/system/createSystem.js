// @flow

import type { StyleCache } from '../cache';
import type { Styler } from '../styles';
import type { Theme } from '../theme';

type ComponentOptions = {
  cacheProps?: Array<string>,
  stripProps?: Array<string>,
  styles?: Array<Styler<any>>,
};

export type System = {
  theme: Theme,
  viewport: number,
};

export type SystemAPI = System & {
  applyStyles(componentName: string, props: Object, componentOptions?: ComponentOptions): Object,
};

export type SystemSettings = {
  cache: StyleCache,
  componentStyles?: { [componentName: string]: Array<Styler<any>> },
  globalStyles?: Array<Styler<any>>,
  styleApplicatorFactory: any,
  theme: Theme,
  viewport?: number,
};

export default function createSystem({
  cache,
  componentStyles = {},
  globalStyles = [],
  styleApplicatorFactory,
  theme,
  viewport = 0,
}: SystemSettings): SystemAPI {
  const styleApplicator = styleApplicatorFactory({
    cache,
    componentStyles,
    globalStyles,
  });

  return {
    applyStyles: (componentName: string, props: Object, options?: ComponentOptions): Object =>
      styleApplicator.applyStyles(componentName, props, { theme, viewport }, options),
    propBlacklist: styleApplicator.stripProps,
    theme,
    viewport,
  };
}
