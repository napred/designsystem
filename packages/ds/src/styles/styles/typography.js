// @flow

import type { Styler } from '../types';
import { createNumericStyle, createStringStyle } from '../simpleStyleFactories';
import { createNumericSystemStyle, createStringSystemStyle } from '../systemStyleFactories';

export const fontFamily: Styler<{
  fontFamily?: string | Array<string> | void,
}> = createStringSystemStyle('fontFamily', 'font-family', 'fontFamilies', 'default');

export const fontSize: Styler<{
  fontSize?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', 0);

export const fontWeight: Styler<{
  fontWeight?: number | string | Array<number | string> | void,
}> = createStringStyle('fontWeight', 'font-weight');

export const lineHeight: Styler<{
  lineHeight?: number | string | Array<number | string> | void,
}> = createNumericStyle('lineHeight', 'line-height');

export const textAlign: Styler<{
  textAlign?: string | Array<string> | void,
}> = createStringStyle('textAlign', 'text-align');

export const textOverflow: Styler<{
  textOverflow?: string | Array<string> | void,
}> = createStringStyle('textOverflow', 'text-overflow');

export const textTransform: Styler<{
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
}> = createStringStyle('textTransform', 'text-transform');

export const whiteSpace: Styler<{
  whiteSpace?: string | Array<string> | void,
}> = createStringStyle('whiteSpace', 'white-space');
