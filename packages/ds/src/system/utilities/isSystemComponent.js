// @flow

import type { ComponentType } from 'react';
import { SystemComponent } from '../types';

export default function isSystemComponent(
  Component: string | ComponentType<any> | Class<SystemComponent<any>>,
): boolean {
  if (typeof Component === 'string') {
    return false;
  }

  return (Component: any).isSystemComponent != null;
}
