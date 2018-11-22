// @flow

import type { Styler } from '../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';

export const borderColor: Styler<{
  borderColor?: string | Array<string> | void,
}> = createStringSystemStyle('borderColor', 'border-color', 'colors');

type BorderRadius = number | string | void | null;

export const borderRadius: Styler<{
  borderRadius?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle('borderRadius', 'border-radius', 'borderRadiuses');

export const borderRadiusTopLeft: Styler<{
  borderRadiusTopLeft?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle('borderRadiusTopLeft', 'border-top-left-radius', 'borderRadiuses');

export const borderRadiusTopRight: Styler<{
  borderRadiusTopRight?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle('borderRadiusTopRight', 'border-top-right-radius', 'borderRadiuses');

export const borderRadiusBottomLeft: Styler<{
  borderRadiusBottomLeft?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle(
  'borderRadiusBottomLeft',
  'border-bottom-left-radius',
  'borderRadiuses',
);

export const borderRadiusBottomRight: Styler<{
  borderRadiusBottomRight?: BorderRadius | Array<BorderRadius>,
}> = createNumericSystemStyle(
  'borderRadiusBottomRight',
  'border-bottom-right-radius',
  'borderRadiuses',
);

export const borderStyle: Styler<{
  borderStyle?: string | Array<string> | void,
}> = createStringStyle('borderStyle', 'border-style');

export const borderWidth: Styler<{
  borderWidth?: number | string | Array<number | string> | void,
}> = createNumericStyle('borderWidth', 'border-width');

export const display: Styler<{
  display?: string | Array<string> | void,
}> = createStringStyle('display', 'display');

export const height: Styler<{
  height?: number | string | Array<number | string> | void,
}> = createNumericStyle('height', 'height');

export const minHeight: Styler<{
  minHeight?: number | string | Array<number | string> | void,
}> = createNumericStyle('minHeight', 'min-height');

export const minWidth: Styler<{
  minWidth?: number | string | Array<number | string> | void,
}> = createNumericStyle('minWidth', 'min-width');

export const maxHeight: Styler<{
  maxHeight?: number | string | Array<number | string> | void,
}> = createNumericStyle('maxHeight', 'max-height');

export const maxWidth: Styler<{
  maxWidth?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('maxWidth', 'max-width', 'containerSizes');

export const width: Styler<{
  width?: number | string | Array<number | string> | void,
}> = createNumericStyle('width', 'width');
