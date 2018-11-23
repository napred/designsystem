// @flow

import type { StyleCache } from '../cache';
import type { Styler } from '../styles';
import type { Theme } from '../theme';

type ComponentOptions = {
  cacheProps?: Array<string>,
  stripProps?: Array<string>,
  style?: string | Object | ((props: Object) => string),
};

export type System = {
  applyStyles(componentName: string, props: Object, componentOptions?: ComponentOptions): Object,
  propBlacklist: Array<string>,
  theme: Theme,
  viewport: number,
};

export type SystemSettings = {
  cache: StyleCache,
  componentStyles?: { [componentName: string]: Array<Styler> },
  globalStyles?: Array<Styler>,
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
}: SystemSettings) {
  const styleApplicator = styleApplicatorFactory({
    cache,
    componentStyles,
    globalStyles,
  });

  return {
    applyStyles: (componentName, props, options) =>
      styleApplicator.applyStyles(componentName, props, { theme, viewport }, options),
    propBlacklist: styleApplicator.stripProps,
    theme,
    viewport,
  };
}
