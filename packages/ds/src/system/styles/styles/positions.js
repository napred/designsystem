// @flow

import type { StyleFn } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';

export type Position = 'absolute' | 'fixed' | 'relative';

export const bottom: StyleFn<{
  bottom?: number | string | Array<number | string> | void,
}> = createNumericStyle('bottom', 'bottom');

export const left: StyleFn<{
  left?: number | string | Array<number | string> | void,
}> = createNumericStyle('left', 'left');

export const right: StyleFn<{
  right?: number | string | Array<number | string> | void,
}> = createNumericStyle('right', 'right');

export const position: StyleFn<{
  position?: Position | Array<Position> | void,
}> = createStringStyle('position', 'position');

export const top: StyleFn<{
  top?: number | string | Array<number | string> | void,
}> = createNumericStyle('top', 'top');

export const zIndex: StyleFn<{
  zIndex?: number | string | Array<number | string> | void,
}> = createStringStyle('zIndex', 'z-index');
