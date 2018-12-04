import { IStyler } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';

export type Position = 'absolute' | 'fixed' | 'relative' | 'sticky';

export const bottom: IStyler<{
  bottom?: number | string | Array<number | string> | void;
}> = createNumericStyle('bottom', 'bottom');

export const left: IStyler<{
  left?: number | string | Array<number | string> | void;
}> = createNumericStyle('left', 'left');

export const right: IStyler<{
  right?: number | string | Array<number | string> | void;
}> = createNumericStyle('right', 'right');

export const position: IStyler<{
  position?: Position | Position[] | void;
}> = createStringStyle('position', 'position');

export const top: IStyler<{
  top?: number | string | Array<number | string> | void;
}> = createNumericStyle('top', 'top');

export const zIndex: IStyler<{
  zIndex?: number | string | Array<number | string> | void;
}> = createStringStyle('zIndex', 'zIndex');
