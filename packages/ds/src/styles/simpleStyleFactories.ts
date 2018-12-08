import { ISystem } from '../system';
import { IStyler } from '../types';
import convertUnit from '../utilities/convertUnit';
import formatStyleResult from './formatStyleResult';

export function createSimpleStyle<T extends object>(
  propName: string,
  cssAttribute: string | string[],
  formatter: (val: any) => string,
  defaultValue?: any,
): IStyler<T> {
  const cssAttributes = Array.isArray(cssAttribute) ? cssAttribute : [cssAttribute];

  return {
    apply: (props: { [key: string]: any }, { viewport: bp }: ISystem) => {
      const propValue = props[propName] == null ? defaultValue : props[propName];

      if (propValue == null) {
        return formatStyleResult(propValue, cssAttributes, formatter);
      }

      if (Array.isArray(propValue)) {
        const bpPropValue = propValue[bp];
        const lastBpPropValue = propValue[propValue.length - 1];

        if (bpPropValue != null) {
          return formatStyleResult(bpPropValue, cssAttributes, formatter);
        }

        // if propValue for bp does not exist
        // look if we have defaultValue
        // if we dont have defaultvalue, return empty result
        // if defaultValue is scalar return it
        // if defaultValue is responsive (array) pick the longer array and return last value
        if (Array.isArray(defaultValue)) {
          const bpDefaultValue = defaultValue[bp];

          if (bpDefaultValue != null) {
            return formatStyleResult(bpDefaultValue, cssAttributes, formatter);
          }

          const arr = propValue.length >= defaultValue.length ? propValue : defaultValue;
          const val = arr[arr.length - 1];

          return formatStyleResult(val, cssAttributes, formatter);
        } else if (defaultValue != null) {
          return formatStyleResult(defaultValue, cssAttributes, formatter);
        }

        // return the last breakpoint value from an array if current viewport index
        // exceeds the range
        return formatStyleResult(lastBpPropValue, cssAttributes, formatter);
      }

      return formatStyleResult(propValue, cssAttributes, formatter);
    },
    propNames: [propName],
    stripProps: [propName],
  };
}

export function createNumericStyle<T extends object>(
  propName: string,
  cssAttribute: string | string[],
  defaultValue?: number | string | Array<number | string> | void,
): IStyler<T> {
  return createSimpleStyle(propName, cssAttribute, convertUnit, defaultValue);
}

export function createStringStyle<T extends object>(
  propName: string,
  cssAttribute: string | string[],
  defaultValue?: string | string[] | void,
): IStyler<T> {
  return createSimpleStyle(propName, cssAttribute, val => val, defaultValue);
}
