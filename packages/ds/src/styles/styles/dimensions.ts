import { IStyler } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';

export const borderColor: IStyler<{
  borderColor?: string | string[] | void;
}> = createStringSystemStyle('borderColor', 'border-color', 'colors');

type BorderRadius = number | string | void | null;

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
  borderStyle?: string | string[] | void;
}> = createStringStyle('borderStyle', 'border-style');

export const borderWidth: IStyler<{
  borderWidth?: number | string | Array<number | string> | void;
}> = createNumericStyle('borderWidth', 'border-width');

export const display: IStyler<{
  display?: string | string[] | void;
}> = createStringStyle('display', 'display');

export const height: IStyler<{
  height?: number | string | Array<number | string> | void;
}> = createNumericStyle('height', 'height');

export const minHeight: IStyler<{
  minHeight?: number | string | Array<number | string> | void;
}> = createNumericStyle('minHeight', 'min-height');

export const minWidth: IStyler<{
  minWidth?: number | string | Array<number | string> | void;
}> = createNumericStyle('minWidth', 'min-width');

export const maxHeight: IStyler<{
  maxHeight?: number | string | Array<number | string> | void;
}> = createNumericStyle('maxHeight', 'max-height');

export const maxWidth: IStyler<{
  maxWidth?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('maxWidth', 'max-width', 'containerSizes');

export const width: IStyler<{
  width?: number | string | Array<number | string> | void;
}> = createNumericStyle('width', 'width');
