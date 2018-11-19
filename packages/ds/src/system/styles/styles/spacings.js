// @flow

import type { StyleFn } from '../../types';
import { createNumericSystemStyle } from '../systemStyleFactories';

export const m: StyleFn<{
  m?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('m', 'margin', 'spacing');

export const mb: StyleFn<{
  mb?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mb', 'margin-bottom', 'spacing');

export const ml: StyleFn<{
  ml?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('ml', 'margin-left', 'spacing');

export const mr: StyleFn<{
  mr?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mr', 'margin-right', 'spacing');

export const mt: StyleFn<{
  mt?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mt', 'margin-top', 'spacing');

export const mx: StyleFn<{
  mx?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mx', ['margin-left', 'margin-right'], 'spacing');

export const my: StyleFn<{
  my?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('my', ['margin-top', 'margin-bottom'], 'spacing');

export const p: StyleFn<{
  p?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('p', 'padding', 'spacing');

export const pb: StyleFn<{
  pb?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pb', 'padding-bottom', 'spacing');

export const pl: StyleFn<{
  pl?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pl', 'padding-left', 'spacing');

export const pr: StyleFn<{
  pr?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pr', 'padding-right', 'spacing');

export const pt: StyleFn<{
  pt?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pt', 'padding-top', 'spacing');

export const px: StyleFn<{
  px?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('px', ['padding-left', 'padding-right'], 'spacing');

export const py: StyleFn<{
  py?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('py', ['padding-top', 'padding-bottom'], 'spacing');
