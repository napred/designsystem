// @flow

// $FlowFixMe
import React, { useState, type Node } from 'react';
import DesignSystemContext from './context';
import defaultTheme from './defaultTheme';
import { useBreakpointDetection, useStyleReset } from './hooks';
import { createSystem } from './system';
import { createNullCache, type StyleCache } from './cache';
import { createStyleApplicator, styleList, type Styler } from './styles';
import type { Theme } from './theme';

const defaultCache = createNullCache();

export const DesignSystemConsumer = DesignSystemContext.Consumer;

type Props = {
  cache?: StyleCache,
  children?: Node,
  componentStyles?: { [componentName: string]: Array<Styler<any>> },
  styleApplicatorFactory?: Function,
  styles?: Array<Styler<any>>,
  is?: number,
  theme?: Theme,
};

export default function DesignSystem({
  cache = defaultCache,
  children,
  componentStyles = {},
  styles = [],
  styleApplicatorFactory = createStyleApplicator,
  is = 0,
  theme = defaultTheme,
}: Props) {
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

  return <DesignSystemContext.Provider value={system}>{children}</DesignSystemContext.Provider>;
}
