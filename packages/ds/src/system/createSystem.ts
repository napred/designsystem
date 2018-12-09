import { useMemo, useState } from 'react';
import {
  IComponentOptions,
  IStyleCache,
  IStyler,
  IStylingOptions,
  ITheme,
  StyleApplicatorFactory,
} from '../types';

export interface ISystem {
  /** Current theme */
  theme: ITheme;
  /** Current viewport */
  viewport: number;
}

export type SystemAPI<TStyle> = ISystem & {
  applyStyles<TProps extends object>(
    componentName: string,
    props: TProps,
    componentOptions?: IStylingOptions<TProps, TStyle>,
  ): TProps;
  /** Sets viewport, this is used by useBreakpointDetection */
  setViewport(viewport: number): void;
};

export interface ISystemSettings<TStyle> {
  cache: IStyleCache;
  componentStyles?: { [componentName: string]: Array<IStyler<any, TStyle>> };
  globalStyles?: Array<IStyler<any, TStyle>>;
  styleApplicatorFactory: StyleApplicatorFactory<TStyle>;
  theme: ITheme;
  viewport?: number;
}

/**
 * Create system hook
 */
export default function createSystem<TStyle>({
  cache,
  componentStyles = {},
  globalStyles = [],
  styleApplicatorFactory,
  theme,
  viewport = 0,
}: ISystemSettings<TStyle>): SystemAPI<TStyle> {
  const [currentViewport, setViewport] = useState(viewport);
  const styleApplicator = useMemo(
    () => styleApplicatorFactory({ cache, componentStyles, globalStyles }),
    [cache, componentStyles, globalStyles],
  );
  const applyStyles = useMemo(
    () => <TProps extends object>(
      componentName: string,
      props: TProps,
      options: IComponentOptions<TProps, TStyle> = {},
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
