import {
  createNullCache,
  createSystem,
  DesignSystemContext,
  IStyleCache,
  IStyler,
  ITheme,
  styleList,
} from '@napred/ds';
import React, { ReactNode, useState } from 'react';
import createStyleApplicator from './createStyleApplicator';
import defaultTheme from './defaultTheme';

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
  is = 0,
  styles = [],
  theme = defaultTheme,
}: IProps) {
  const [currentViewport, setCurrentViewport] = useState(is);
  const [globalStyles] = useState(() => [...styleList, ...styles]);
  const system = createSystem({
    cache,
    componentStyles,
    globalStyles,
    styleApplicatorFactory: createStyleApplicator,
    theme,
    viewport: is,
  });

  if (currentViewport !== is) {
    setCurrentViewport(is);
    system.setViewport(is);
  }

  return <DesignSystemProvider value={system}>{children}</DesignSystemProvider>;
}
