// @flow

import type { ComponentType } from 'react';
import { SystemComponent } from '../types';
import isSystemComponent from './isSystemComponent';
import createCleanTag from './createCleanTag';

export default function normalizeComponent(
  Component: string | ComponentType<any> | Class<SystemComponent<any>>,
): ComponentType<any> | Class<SystemComponent<any>> {
  if (typeof Component === 'string' || !isSystemComponent(Component)) {
    return createCleanTag(Component);
  }

  return Component;
}
