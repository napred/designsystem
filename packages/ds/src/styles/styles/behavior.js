// @flow

import type { Styler } from '../types';
import { createStringStyle } from '../simpleStyleFactories';

export type Overflow = 'scroll' | 'hidden' | 'visible' | 'overlay';

export const overflow: Styler<{
  overflow?: Overflow | Array<Overflow> | void,
}> = createStringStyle('overflow', 'overflow');

export const overflowX: Styler<{
  overflowX?: Overflow | Array<Overflow> | void,
}> = createStringStyle('overflowX', 'overflow-x');

export const overflowY: Styler<{
  overflowY?: Overflow | Array<Overflow> | void,
}> = createStringStyle('overflowY', 'overflow-y');

export const transition: Styler<{
  transition?: string | void,
}> = createStringStyle('transition', 'transition');
