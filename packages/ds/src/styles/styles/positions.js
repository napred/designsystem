// @flow

import type { Styler } from '../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';

export type Position = 'absolute' | 'fixed' | 'relative';

export const bottom: Styler<{
  bottom?: number | string | Array<number | string> | void,
}> = createNumericStyle('bottom', 'bottom');

export const left: Styler<{
  left?: number | string | Array<number | string> | void,
}> = createNumericStyle('left', 'left');

export const right: Styler<{
  right?: number | string | Array<number | string> | void,
}> = createNumericStyle('right', 'right');

export const position: Styler<{
  position?: Position | Array<Position> | void,
}> = createStringStyle('position', 'position');

export const top: Styler<{
  top?: number | string | Array<number | string> | void,
}> = createNumericStyle('top', 'top');

export const zIndex: Styler<{
  zIndex?: number | string | Array<number | string> | void,
}> = createStringStyle('zIndex', 'z-index');
