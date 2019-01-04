import { ISystem } from '../system';
import { IStyler } from '../types';
import { arrayize, convertUnit, getResponsiveValue } from '../utilities';
import formatStyleResult from './formatStyleResult';

export function createSystemStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  systemName: string,
  formatter: (value: number | string) => string | number,
  defaultValue?: string | number | Array<string | number | undefined | null> | undefined | null,
): IStyler<TProps> {
  const cssAttributes: string[] = arrayize(cssAttribute);

  return {
    apply: (props: TProps, { theme, viewport: bp }: ISystem) => {
      const propValue = arrayize<string | number | null | undefined>(props[propName] as any);
      const systemValue = theme.get(systemName);

      const bpValue = getResponsiveValue(bp, propValue, defaultValue);

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
  defaultValue?: string | number | Array<string | number | undefined | null> | undefined | null,
): IStyler<TProps> {
  return createSystemStyle(propName, cssAttribute, systemName, convertUnit, defaultValue);
}

export function createStringSystemStyle<TProps extends object>(
  propName: keyof TProps,
  cssAttribute: string | string[],
  systemName: string,
  defaultValue?: string | number | Array<string | number | undefined | null> | undefined | null,
): IStyler<TProps> {
  return createSystemStyle(propName, cssAttribute, systemName, val => val, defaultValue);
}

export function createScaledFontSizeSystemStyle<TProps extends object>(
  propName: keyof TProps,
  defaultValue?: string | number | Array<string | number | undefined | null> | undefined | null,
): IStyler<TProps> {
  return {
    apply: (
      props: TProps & {
        fontSize?: string | number | Array<string | number | undefined | null> | undefined | null;
      },
      { theme, viewport: bp }: ISystem,
    ) => {
      const sizeIndex = getResponsiveValue(bp, arrayize(props.fontSize as any), 0);
      const size = theme.get('fontSizes')[sizeIndex || 0] || sizeIndex;

      const value = getResponsiveValue(bp, arrayize(props[propName] as any), theme.get(propName as string) || defaultValue);

      if (Number.isNaN(Number(value))) {
        // try to parse value and units
        return {
          [propName]: (value as string).replace(
            /^(-?\d+(?:\.\d+)?)(?:\s*([a-zA-Z%]+))?$/,
            (_, parsedNumber, parsedUnit) => {
              return convertUnit(
                parsedUnit === '%' ? size : parsedNumber,
                parsedUnit === '%' ? parsedNumber / 100 : 1,
              );
            },
          ),
        };
      }

      return {
        [propName]: convertUnit(size, Number(value)),
      };
    },
    propNames: [propName],
    stripProps: [propName],
  };
}
