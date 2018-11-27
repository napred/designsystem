import { IStyler } from '../../types';
import { createNumericSystemStyle } from '../systemStyleFactories';

export const m: IStyler<{
  m?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('m', 'margin', 'spacing');

export const mb: IStyler<{
  mb?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mb', 'margin-bottom', 'spacing');

export const ml: IStyler<{
  ml?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('ml', 'margin-left', 'spacing');

export const mr: IStyler<{
  mr?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mr', 'margin-right', 'spacing');

export const mt: IStyler<{
  mt?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mt', 'margin-top', 'spacing');

export const mx: IStyler<{
  mx?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mx', ['margin-left', 'margin-right'], 'spacing');

export const my: IStyler<{
  my?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('my', ['margin-top', 'margin-bottom'], 'spacing');

export const p: IStyler<{
  p?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('p', 'padding', 'spacing');

export const pb: IStyler<{
  pb?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pb', 'padding-bottom', 'spacing');

export const pl: IStyler<{
  pl?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pl', 'padding-left', 'spacing');

export const pr: IStyler<{
  pr?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pr', 'padding-right', 'spacing');

export const pt: IStyler<{
  pt?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pt', 'padding-top', 'spacing');

export const px: IStyler<{
  px?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('px', ['padding-left', 'padding-right'], 'spacing');

export const py: IStyler<{
  py?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('py', ['padding-top', 'padding-bottom'], 'spacing');
