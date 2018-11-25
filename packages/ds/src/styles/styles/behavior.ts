import { createStringStyle } from '../simpleStyleFactories';
import { IStyler } from '../types';

export type Overflow = 'scroll' | 'hidden' | 'visible' | 'overlay';

export const overflow: IStyler<{
  overflow?: Overflow | Overflow[] | void;
}> = createStringStyle('overflow', 'overflow');

export const overflowX: IStyler<{
  overflowX?: Overflow | Overflow[] | void;
}> = createStringStyle('overflowX', 'overflow-x');

export const overflowY: IStyler<{
  overflowY?: Overflow | Overflow[] | void;
}> = createStringStyle('overflowY', 'overflow-y');

export const transition: IStyler<{
  transition?: string | void;
}> = createStringStyle('transition', 'transition');
