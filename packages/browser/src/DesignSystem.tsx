import {
  createNullCache,
  createSystem,
  defaultTheme,
  DesignSystemContext,
  IStyleCache,
  IStyler,
  ITheme,
  StyleApplicatorFactory,
  styleList,
} from '@napred/ds';
import React, { ReactNode, useState } from 'react';
import createStyleApplicator from './createStyleApplicator';
import { useBreakpointDetection, useStyleReset } from './hooks';
import { StyleDefinition } from './types';

const defaultCache = createNullCache();

export const DesignSystemConsumer = DesignSystemContext.Consumer;
export const DesignSystemProvider = DesignSystemContext.Provider;

interface IProps {
  /** Style cache used for style caching */
  cache?: IStyleCache;
  children?: ReactNode;
  /** Component custom styles registry */
  componentStyles?: { [componentName: string]: Array<IStyler<any, StyleDefinition>> };
  /** Applicatory used to create style applicator */
  styleApplicatorFactory?: StyleApplicatorFactory<StyleDefinition>;
  /** Custom blobal styles */
  styles?: Array<IStyler<any, StyleDefinition>>;
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
  is = 0,
  styles = [],
  styleApplicatorFactory = createStyleApplicator,
  theme = defaultTheme,
}: IProps) {
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
