// @flow

import type { StyleFn } from '../../types';
import { createStringStyle } from '../simpleStyleFactories';

export type Overflow = 'scroll' | 'hidden' | 'visible' | 'overlay';

export const overflow: StyleFn<{
  overflow?: Overflow | Array<Overflow> | void,
}> = createStringStyle('overflow', 'overflow');

export const overflowX: StyleFn<{
  overflowX?: Overflow | Array<Overflow> | void,
}> = createStringStyle('overflowX', 'overflow-x');

export const overflowY: StyleFn<{
  overflowY?: Overflow | Array<Overflow> | void,
}> = createStringStyle('overflowY', 'overflow-y');

export const transition: StyleFn<{
  transition?: string | void,
}> = createStringStyle('transition', 'transition');
