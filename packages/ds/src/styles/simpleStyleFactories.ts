import { ISystem } from '../system';
import { IStyler } from '../types';
import { arrayize, convertUnit, getResponsiveValue } from '../utilities';
import formatStyleResult from './formatStyleResult';

export function createSimpleStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  formatter: (val: any) => string | number,
  defaultValue?: string | number | null | undefined | Array<string | number | null | undefined>,
): IStyler<TProps> {
  const cssAttributes = Array.isArray(cssAttribute) ? cssAttribute : [cssAttribute];

  return {
    apply: (props: TProps, { viewport: bp }: ISystem) => {
      const propValue = arrayize<string | number | null | undefined>(props[propName] as any);
      const bpValue = getResponsiveValue(bp, propValue, defaultValue);

      return formatStyleResult(bpValue, cssAttributes, formatter);
    },
    propNames: [propName],
    stripProps: [propName],
  };
}

export function createNumericStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  defaultValue?: string | number | null | undefined | Array<string | number | null | undefined>,
): IStyler<TProps> {
  return createSimpleStyle(propName, cssAttribute, convertUnit, defaultValue);
}

export function createStringStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  defaultValue?: string | number | null | undefined | Array<string | number | null | undefined>,
): IStyler<TProps> {
  return createSimpleStyle(propName, cssAttribute, val => val, defaultValue);
}
