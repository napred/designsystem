import { useCallback, useMemo, useState } from 'react';
import { IStyleCache } from '../cache';
import { IStyler } from '../styles';
import { ITheme } from '../theme';

interface IComponentOptions {
  /** Used these props for style cache */
  cacheProps?: string[];
  /** Prevent these props from being rendered to HTML */
  stripProps?: string[];
  /** Component's local styles */
  styles?: Array<IStyler<any>>;
}

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
    componentOptions?: IComponentOptions,
  ): TProps;
  /** Sets viewport, this is used by useBreakpointDetection */
  setViewport(viewport: number): void;
};

export interface ISystemSettings {
  cache: IStyleCache;
  componentStyles?: { [componentName: string]: Array<IStyler<any>> };
  globalStyles?: Array<IStyler<any>>;
  styleApplicatorFactory: any;
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
      options?: IComponentOptions,
    ): TProps =>
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
