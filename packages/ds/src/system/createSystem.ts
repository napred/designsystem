import { useCallback, useMemo, useState } from 'react';
import { ITheme } from '../theme';
import {
  IComponentOptions,
  IStyleCache,
  IStyler,
  IStylingOptions,
  StyleApplicatorFactory,
} from '../types';

export interface ISystem {
  /** Current theme */
  theme: ITheme;
  /** Current viewport */
  viewport: number;
}

export type SystemAPI = ISystem & {
  applyStyles<TProps extends object>(
    componentName: string,
    props: TProps,
    componentOptions?: IStylingOptions,
  ): TProps;
  /** Sets viewport, this is used by useBreakpointDetection */
  setViewport(viewport: number): void;
};

export interface ISystemSettings {
  cache: IStyleCache;
  componentStyles?: { [componentName: string]: Array<IStyler<any>> };
  globalStyles?: Array<IStyler<any>>;
  styleApplicatorFactory: StyleApplicatorFactory;
  theme: ITheme;
  viewport?: number;
}

/**
 * Create system hook
 */
export default function createSystem({
  cache,
  componentStyles = {},
  globalStyles = [],
  styleApplicatorFactory,
  theme,
  viewport = 0,
}: ISystemSettings): SystemAPI {
  const [currentViewport, setViewport] = useState(viewport);
  const styleApplicator = useMemo(
    () => styleApplicatorFactory({ cache, componentStyles, globalStyles }),
    [cache, componentStyles, globalStyles],
  );
  const applyStyles = useCallback(
    <TProps extends object>(
      componentName: string,
      props: TProps,
      options: IComponentOptions = {},
    ): TProps =>
      styleApplicator.apply(componentName, props, { theme, viewport: currentViewport }, options),
    [currentViewport, theme],
  );

  return {
    applyStyles,
    setViewport,
    theme,
    viewport: currentViewport,
  };
}
