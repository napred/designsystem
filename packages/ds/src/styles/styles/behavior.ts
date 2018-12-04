import { IStyler } from '../../types';
import { createStringStyle } from '../simpleStyleFactories';

export type Overflow = 'auto' | 'scroll' | 'hidden' | 'visible' | 'overlay';

export const overflow: IStyler<{
  overflow?: Overflow | Array<Overflow | null | undefined> | null | undefined;
}> = createStringStyle('overflow', 'overflow');

export const overflowX: IStyler<{
  overflowX?: Overflow | Array<Overflow | null | undefined> | null | undefined;
}> = createStringStyle('overflowX', 'overflowX');

export const overflowY: IStyler<{
  overflowY?: Overflow | Array<Overflow | null | undefined> | null | undefined;
}> = createStringStyle('overflowY', 'overflowY');

export const transition: IStyler<{
  transition?: string | Array<string | null | undefined> | null | undefined;
}> = createStringStyle('transition', 'transition');
