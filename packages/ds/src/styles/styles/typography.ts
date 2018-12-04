import { IStyler } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';

export const fontFamily: IStyler<{
  fontFamily?: string | string[] | void;
}> = createStringSystemStyle('fontFamily', 'fontFamily', 'fontFamilies', 'default');

export const fontSize: IStyler<{
  fontSize?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('fontSize', 'fontSize', 'fontSizes', 0);

export const fontWeight: IStyler<{
  fontWeight?: number | string | Array<number | string> | void;
}> = createStringStyle('fontWeight', 'fontWeight');

export const lineHeight: IStyler<{
  lineHeight?: number | string | Array<number | string> | void;
}> = createNumericStyle('lineHeight', 'lineHeight');

export const textAlign: IStyler<{
  textAlign?: string | string[] | void;
}> = createStringStyle('textAlign', 'textAlign');

export const textOverflow: IStyler<{
  textOverflow?: string | string[] | void;
}> = createStringStyle('textOverflow', 'textOverflow');

export const textTransform: IStyler<{
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}> = createStringStyle('textTransform', 'textTransform');

export const whiteSpace: IStyler<{
  whiteSpace?: string | string[] | void;
}> = createStringStyle('whiteSpace', 'whiteSpace');
