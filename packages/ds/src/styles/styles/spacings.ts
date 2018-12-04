import { IStyler } from '../../types';
import { createNumericSystemStyle } from '../systemStyleFactories';

export const m: IStyler<{
  m?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('m', 'margin', 'spacing');

export const mb: IStyler<{
  mb?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mb', 'marginBottom', 'spacing');

export const ml: IStyler<{
  ml?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('ml', 'marginLeft', 'spacing');

export const mr: IStyler<{
  mr?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mr', 'marginRight', 'spacing');

export const mt: IStyler<{
  mt?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mt', 'marginTop', 'spacing');

export const mx: IStyler<{
  mx?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('mx', ['marginLeft', 'marginRight'], 'spacing');

export const my: IStyler<{
  my?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('my', ['marginTop', 'marginBottom'], 'spacing');

export const p: IStyler<{
  p?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('p', 'padding', 'spacing');

export const pb: IStyler<{
  pb?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pb', 'paddingBottom', 'spacing');

export const pl: IStyler<{
  pl?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pl', 'paddingLeft', 'spacing');

export const pr: IStyler<{
  pr?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pr', 'paddingRight', 'spacing');

export const pt: IStyler<{
  pt?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('pt', 'paddingTop', 'spacing');

export const px: IStyler<{
  px?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('px', ['paddingLeft', 'paddingRight'], 'spacing');

export const py: IStyler<{
  py?: number | string | Array<number | string> | void;
}> = createNumericSystemStyle('py', ['paddingTop', 'paddingBottom'], 'spacing');
