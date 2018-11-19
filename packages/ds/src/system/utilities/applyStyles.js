// @flow

import getDisplayName from 'react-display-name';
// $FlowExpectError
import styled, { isStyledComponent } from 'styled-components';
import type { ComponentType } from 'react';
import createCleanTag from './createCleanTag';
import collectStylePropNames from './collectStylePropNames';
import isSystemComponent from './isSystemComponent';
import { systemStyles } from '../styles';
import { SystemComponent, type StyleFn } from '../types';

export default function applyStyles<T: Object>(
  Component: string | ComponentType<T> | Class<SystemComponent<T>>,
  styles: Array<StyleFn<any>>,
  parentDefaultProps: Object = {},
): [ComponentType<T>, Array<string>] {
  if (isStyledComponent(Component)) {
    throw new Error('U mad fam? No styled component, aight?!');
  }

  let C = Component;
  // Flow hack because systemStyles is array of styler
  // we just use $Compose as a hack to get props of all styles
  let allStyles = [...(systemStyles: any), ...styles];
  let blacklist = collectStylePropNames(styles);
  let defaultProps = {};

  if (typeof Component === 'string') {
    C = createCleanTag(Component);
  } else if (isSystemComponent(Component)) {
    const SysComponent: Class<SystemComponent<any>> = (Component: any);

    if ((SysComponent: any).defaultProps != null) {
      defaultProps = {
        ...(SysComponent: any).defaultProps,
        ...parentDefaultProps,
      };
    }

    C = SysComponent.targetComponent;
    allStyles = [...SysComponent.appliedStyles, ...allStyles];
    blacklist = [...blacklist, ...SysComponent.blacklist];
  } else if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      `You are trying to use custom component ${getDisplayName(
        Component,
      )} as base component, it can cause problem with blacklisting, etc`,
    );
  }

  const StyledComponent = styled((C: any))`
    /* prettier-ignore */
    ${allStyles}
  `;

  StyledComponent.defaultProps = defaultProps;

  return [StyledComponent, blacklist];
}
