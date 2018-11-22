// @flow

import type { Styler } from '../types';
import { createNumericSystemStyle } from '../systemStyleFactories';

export const m: Styler<{
  m?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('m', 'margin', 'spacing');

export const mb: Styler<{
  mb?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mb', 'margin-bottom', 'spacing');

export const ml: Styler<{
  ml?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('ml', 'margin-left', 'spacing');

export const mr: Styler<{
  mr?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mr', 'margin-right', 'spacing');

export const mt: Styler<{
  mt?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mt', 'margin-top', 'spacing');

export const mx: Styler<{
  mx?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('mx', ['margin-left', 'margin-right'], 'spacing');

export const my: Styler<{
  my?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('my', ['margin-top', 'margin-bottom'], 'spacing');

export const p: Styler<{
  p?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('p', 'padding', 'spacing');

export const pb: Styler<{
  pb?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pb', 'padding-bottom', 'spacing');

export const pl: Styler<{
  pl?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pl', 'padding-left', 'spacing');

export const pr: Styler<{
  pr?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pr', 'padding-right', 'spacing');

export const pt: Styler<{
  pt?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('pt', 'padding-top', 'spacing');

export const px: Styler<{
  px?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('px', ['padding-left', 'padding-right'], 'spacing');

export const py: Styler<{
  py?: number | string | Array<number | string> | void,
}> = createNumericSystemStyle('py', ['padding-top', 'padding-bottom'], 'spacing');
