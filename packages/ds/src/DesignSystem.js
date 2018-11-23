// @flow

// $FlowFixMe
import React, { useState, type Node } from 'react';
import DesignSystemContext from './context';
import defaultTheme from './defaultTheme';
import { createSystem } from './system';
import { createNullCache, type StyleCache } from './cache';
import { createStyleApplicator, styles as systemStyles, type Styler } from './styles';
import type { Theme } from './theme';

const defaultCache = createNullCache();
const baseStyles = Object.keys(systemStyles).map(name => systemStyles[name]);

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
  const [context] = useState(() =>
    createSystem({
      cache,
      componentStyles,
      globalStyles: [...baseStyles, ...styles],
      styleApplicatorFactory,
      theme,
      viewport: is,
    }),
  );

  return <DesignSystemContext.Provider value={context}>{children}</DesignSystemContext.Provider>;
}
