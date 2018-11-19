// @flow

import type { Interpolation } from 'styled-components';
import type { StyleFn } from '../types';

export function createCssStyle<T: Object>(
  propNames: string | Array<string>,
  style: Array<Interpolation>,
): StyleFn<T> {
  const styler = style;
  (styler: any).propNames = propNames;

  return (styler: any);
}
