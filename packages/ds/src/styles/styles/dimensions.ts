import { IStyler } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle } from '../systemStyleFactories';

type BorderRadius = number | string | void | null;
type BorderStyle = string | null | undefined;
type Size = number | string | null | undefined;

export const borderRadius: IStyler<{
  borderRadius?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle('borderRadius', 'borderRadius', 'borderRadiuses');

export const borderRadiusTopLeft: IStyler<{
  borderRadiusTopLeft?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle('borderRadiusTopLeft', 'borderTopLeftRadius', 'borderRadiuses');

export const borderRadiusTopRight: IStyler<{
  borderRadiusTopRight?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle('borderRadiusTopRight', 'borderTopRightRadius', 'borderRadiuses');

export const borderRadiusBottomLeft: IStyler<{
  borderRadiusBottomLeft?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle(
  'borderRadiusBottomLeft',
  'borderBottomLeftRadius',
  'borderRadiuses',
);

export const borderRadiusBottomRight: IStyler<{
  borderRadiusBottomRight?: BorderRadius | BorderRadius[];
}> = createNumericSystemStyle(
  'borderRadiusBottomRight',
  'borderBottomRightRadius',
  'borderRadiuses',
);

export const borderStyle: IStyler<{
  borderStyle?: BorderStyle | BorderStyle[];
}> = createStringStyle('borderStyle', 'borderStyle');

export const borderWidth: IStyler<{
  borderWidth?: Size | Size[];
}> = createNumericStyle('borderWidth', 'borderWidth');

export const display: IStyler<{
  display?: string | string[] | void;
}> = createStringStyle('display', 'display');

export const height: IStyler<{
  height?: Size | Size[];
}> = createNumericStyle('height', 'height');

export const minHeight: IStyler<{
  minHeight?: Size | Size[];
}> = createNumericStyle('minHeight', 'minHeight');

export const minWidth: IStyler<{
  minWidth?: Size | Size[];
}> = createNumericStyle('minWidth', 'minWidth');

export const maxHeight: IStyler<{
  maxHeight?: Size | Size[];
}> = createNumericStyle('maxHeight', 'maxHeight');

export const maxWidth: IStyler<{
  maxWidth?: Size | Size[];
}> = createNumericSystemStyle('maxWidth', 'maxWidth', 'containerSizes');

export const width: IStyler<{
  width?: Size | Size[];
}> = createNumericStyle('width', 'width');
