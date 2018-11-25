import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';
import { IStyler } from '../types';

export const fontFamily: IStyler<{
  fontFamily?: string | string[] | void;
}> = createStringSystemStyle('fontFamily', 'font-family', 'fontFamilies', 'default');

export const fontSize: IStyler<{
  fontSize?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', 0);

export const fontWeight: IStyler<{
  fontWeight?: number | string | Array<number | string> | void;
}> = createStringStyle('fontWeight', 'font-weight');

export const lineHeight: IStyler<{
  lineHeight?: number | string | Array<number | string> | void;
}> = createNumericStyle('lineHeight', 'line-height');

export const textAlign: IStyler<{
  textAlign?: string | string[] | void;
}> = createStringStyle('textAlign', 'text-align');

export const textOverflow: IStyler<{
  textOverflow?: string | string[] | void;
}> = createStringStyle('textOverflow', 'text-overflow');

export const textTransform: IStyler<{
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}> = createStringStyle('textTransform', 'text-transform');

export const whiteSpace: IStyler<{
  whiteSpace?: string | string[] | void;
}> = createStringStyle('whiteSpace', 'white-space');
