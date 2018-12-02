import { IStyler } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle } from '../systemStyleFactories';

type BorderRadius = number | string | void | null;
type BorderStyle = string | null | undefined;
type Size = number | string | null | undefined;

export const borderRadius: IStyler<{
  borderRadius?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle('borderRadius', 'border-radius', 'borderRadiuses');

export const borderRadiusTopLeft: IStyler<{
  borderRadiusTopLeft?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle('borderRadiusTopLeft', 'border-top-left-radius', 'borderRadiuses');

export const borderRadiusTopRight: IStyler<{
  borderRadiusTopRight?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle('borderRadiusTopRight', 'border-top-right-radius', 'borderRadiuses');

export const borderRadiusBottomLeft: IStyler<{
  borderRadiusBottomLeft?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle(
  'borderRadiusBottomLeft',
  'border-bottom-left-radius',
  'borderRadiuses',
);

export const borderRadiusBottomRight: IStyler<{
  borderRadiusBottomRight?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle(
  'borderRadiusBottomRight',
  'border-bottom-right-radius',
  'borderRadiuses',
);

export const borderStyle: IStyler<{
  borderStyle?: BorderStyle | BorderStyle[];
}> = createStringStyle('borderStyle', 'border-style');

export const borderWidth: IStyler<{
  borderWidth?: Size | Size[];
}> = createNumericStyle('borderWidth', 'border-width');

export const display: IStyler<{
  display?: string | string[] | void;
}> = createStringStyle('display', 'display');

export const height: IStyler<{
  height?: Size | Size[];
}> = createNumericStyle('height', 'height');

export const minHeight: IStyler<{
  minHeight?: Size | Size[];
}> = createNumericStyle('minHeight', 'min-height');

export const minWidth: IStyler<{
  minWidth?: Size | Size[];
}> = createNumericStyle('minWidth', 'min-width');

export const maxHeight: IStyler<{
  maxHeight?: Size | Size[];
}> = createNumericStyle('maxHeight', 'max-height');

export const maxWidth: IStyler<{
  maxWidth?: Size | Size[];
}> = createNumericSystemStyle('maxWidth', 'max-width', 'containerSizes');

export const width: IStyler<{
  width?: Size | Size[];
}> = createNumericStyle('width', 'width');
