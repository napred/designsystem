import { ISystem } from '../system';
import { IStyler } from '../types';
import { arrayize, convertUnit, getResponsiveValue } from '../utilities';
import formatStyleResult from './formatStyleResult';

export function createSystemStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  systemName: string,
  formatter: (value: number | string) => string | number,
  defaultValue?: string | number | Array<string | number> | void,
): IStyler<TProps> {
  const cssAttributes: string[] = arrayize(cssAttribute);
  const defaultValues = arrayize(defaultValue || []);

  return {
    apply: (props: TProps, { theme, viewport: bp }: ISystem) => {
      const propValue = arrayize<string | number | null | undefined>(props[propName] as any);
      const systemValue = theme.get(systemName);

      const bpValue = getResponsiveValue(bp, propValue, defaultValues);

      if (bpValue == null) {
        return formatStyleResult(null, cssAttributes, formatter);
      }

      const bpValueNum = Number(bpValue);
      const isNegativeInt =
        !Number.isNaN(bpValueNum) && Number.isInteger(bpValueNum) && bpValueNum < 0;

      const systemBpValue = systemValue[isNegativeInt ? -bpValue : bpValue] || bpValue;

      return formatStyleResult(
        isNegativeInt ? -Number(systemBpValue) : systemBpValue,
        cssAttributes,
        formatter,
      );
    },
    propNames: [propName],
    stripProps: [propName],
  };
}

export function createNumericSystemStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  systemName: string,
  defaultValue?: number | string | Array<number | string> | void,
): IStyler<TProps> {
  return createSystemStyle(propName, cssAttribute, systemName, convertUnit, defaultValue);
}

export function createStringSystemStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  systemName: string,
  defaultValue?: string | string[] | void,
): IStyler<TProps> {
  return createSystemStyle(propName, cssAttribute, systemName, val => val, defaultValue);
}
