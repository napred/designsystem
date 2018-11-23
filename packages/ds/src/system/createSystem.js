// @flow

import { useCallback, useMemo, useState } from 'react';
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
  setViewport(viewport: number): void,
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
  const [currentViewport, setViewport] = useState(viewport);
  const styleApplicator = useMemo(
    () => styleApplicatorFactory({ cache, componentStyles, globalStyles }),
    [cache, componentStyles, globalStyles],
  );
  const applyStyles = useCallback(
    (componentName: string, props: Object, options?: ComponentOptions): Object =>
      styleApplicator.applyStyles(
        componentName,
        props,
        { theme, viewport: currentViewport },
        options,
      ),
    [currentViewport, theme],
  );

  return {
    applyStyles,
    setViewport,
    theme,
    viewport: currentViewport,
  };
}
