// @flow

import type { StyleFn } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';

export const borderColor: StyleFn<{
  borderColor?: string | Array<string> | void,
}> = createStringSystemStyle('borderColor', 'border-color', 'colors');

type BorderRadius = number | string | void | null;

export const borderRadius: StyleFn<{
  borderRadius?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle('borderRadius', 'border-radius', 'borderRadiuses');

export const borderRadiusTopLeft: StyleFn<{
  borderRadiusTopLeft?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle('borderRadiusTopLeft', 'border-top-left-radius', 'borderRadiuses');

export const borderRadiusTopRight: StyleFn<{
  borderRadiusTopRight?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle('borderRadiusTopRight', 'border-top-right-radius', 'borderRadiuses');

export const borderRadiusBottomLeft: StyleFn<{
  borderRadiusBottomLeft?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle(
  'borderRadiusBottomLeft',
  'border-bottom-left-radius',
  'borderRadiuses',
);

export const borderRadiusBottomRight: StyleFn<{
  borderRadiusBottomRight?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle(
  'borderRadiusBottomRight',
  'border-bottom-right-radius',
  'borderRadiuses',
);

export const borderStyle: StyleFn<{
  borderStyle?: string | Array<string> | void,
}> = createStringStyle('borderStyle', 'border-style');

export const borderWidth: StyleFn<{
  borderWidth?: number | string | Array<number | string> | void,
}> = createNumericStyle('borderWidth', 'border-width');

export const display: StyleFn<{
  display?: string | Array<string> | void,
}> = createStringStyle('display', 'display');

export const height: StyleFn<{
  height?: number | string | Array<number | string> | void,
}> = createNumericStyle('height', 'height');

export const minHeight: StyleFn<{
  minHeight?: number | string | Array<number | string> | void,
}> = createNumericStyle('minHeight', 'min-height');

export const minWidth: StyleFn<{
  minWidth?: number | string | Array<number | string> | void,
}> = createNumericStyle('minWidth', 'min-width');

export const maxHeight: StyleFn<{
  maxHeight?: number | string | Array<number | string> | void,
}> = createNumericStyle('maxHeight', 'max-height');

export const maxWidth: StyleFn<{
  maxWidth?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('maxWidth', 'max-width', 'containerSizes');

export const width: StyleFn<{
  width?: number | string | Array<number | string> | void,
}> = createNumericStyle('width', 'width');
