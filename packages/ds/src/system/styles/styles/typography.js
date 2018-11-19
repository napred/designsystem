// @flow

import type { StyleFn } from '../../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';

export const fontFamily: StyleFn<{
  fontFamily?: string | Array<string> | void,
}> = createStringSystemStyle('fontFamily', 'font-family', 'fontFamilies', 'default');

export const fontSize: StyleFn<{
  fontSize?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', 0);

export const fontWeight: StyleFn<{
  fontWeight?: number | string | Array<number | string> | void,
}> = createStringStyle('fontWeight', 'font-weight');

export const lineHeight: StyleFn<{
  lineHeight?: number | string | Array<number | string> | void,
}> = createNumericStyle('lineHeight', 'line-height');

export const textAlign: StyleFn<{
  textAlign?: string | Array<string> | void,
}> = createStringStyle('textAlign', 'text-align');

export const textOverflow: StyleFn<{
  textOverflow?: string | Array<string> | void,
}> = createStringStyle('textOverflow', 'text-overflow');

export const textTransform: StyleFn<{
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
}> = createStringStyle('textTransform', 'text-transform');

export const whiteSpace: StyleFn<{
  whiteSpace?: string | Array<string> | void,
}> = createStringStyle('whiteSpace', 'white-space');
