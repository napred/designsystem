import {
  createNullCache,
  createSystem,
  defaultTheme,
  DesignSystemContext,
  IStyleCache,
  IStyler,
  ITheme,
  styleList,
} from '@napred/ds';
import React, { ReactElement, ReactNode, useState } from 'react';
import createStyleApplicator from './createStyleApplicator';
import { useBreakpointDetection, useStyleReset } from './hooks';

const defaultCache = createNullCache();

export const DesignSystemConsumer = DesignSystemContext.Consumer;
export const DesignSystemProvider = DesignSystemContext.Provider;

interface IProps {
  /** Style cache used for style caching */
  cache?: IStyleCache;
  children?: ReactNode;
  /** Component custom styles registry */
  componentStyles?: { [componentName: string]: Array<IStyler<any>> };
  /** Applicatory used to create style applicator */
  styleApplicatorFactory?: any;
  /** Custom blobal styles */
  styles?: Array<IStyler<any>>;
  /**
   * Override viewport (default is 0)
   * Can be used to force rendering your application for different breakpoints
   */
  is?: number;
  /** Custom theme */
  theme?: ITheme;
}

export default function DesignSystem({
  cache = defaultCache,
  children,
  componentStyles = {},
  styles = [],
  styleApplicatorFactory = createStyleApplicator,
  is = 0,
  theme = defaultTheme,
}: IProps): ReactElement<any> | null {
  const [currentViewport, setCurrentViewport] = useState(is);
  const [globalStyles] = useState(() => [...styleList, ...styles]);
  const system = createSystem({
    cache,
    componentStyles,
    globalStyles,
    styleApplicatorFactory,
    theme,
    viewport: is,
  });
  useBreakpointDetection(currentViewport, system);
  useStyleReset(system);

  if (currentViewport !== is) {
    setCurrentViewport(is);
    system.setViewport(is);
  }

  return <DesignSystemProvider value={system}>{children}</DesignSystemProvider>;
}
