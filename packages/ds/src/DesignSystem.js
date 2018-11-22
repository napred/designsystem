// @flow

// $FlowFixMe
import React, { useState, type Node } from 'react';
import DesignSystemContext, { createSystem } from './context';
import type { Styler } from './styles';
import type { Theme } from './theme';

export const DesignSystemConsumer = DesignSystemContext.Consumer;

type Props = {
  children?: Node,
  componentStyles?: { [componentName: string]: Array<Styler<any>> },
  styles?: Array<Styler<any>>,
  is?: number,
  theme?: Theme,
};

export default function DesignSystem({
  children,
  componentStyles = {},
  styles = [],
  is = 0,
  theme,
}: Props) {
  const [context] = useState(() =>
    createSystem({
      componentStyles,
      extraStyles: styles,
      theme,
      viewport: is,
    }),
  );

  return <DesignSystemContext.Provider value={context}>{children}</DesignSystemContext.Provider>;
}
