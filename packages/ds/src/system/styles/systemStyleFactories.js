// @flow

import type { SystemComponentProps, StyleFn } from '../types';
import convertUnit from '../../utilities/convertUnit';
import formatStyleResult from './formatStyleResult';

export function createSystemStyle<T: Object>(
  propName: string,
  cssAttribute: string | Array<string>,
  systemName: string,
  formatter: (value: number | string) => number | string,
  defaultValue?: any,
): StyleFn<T> {
  const cssAttributes: Array<string> = Array.isArray(cssAttribute) ? cssAttribute : [cssAttribute];

  const styler = (props: SystemComponentProps) => {
    const propValue = props[propName] == null ? defaultValue : props[propName];
    const systemValue = props.system.get(systemName);

    if (propValue == null) {
      return formatStyleResult(null, cssAttributes, formatter);
    }

    const bp = props.viewport;
    const bpValue = Array.isArray(propValue) ? propValue[bp] : propValue;

    if (bpValue != null) {
      const isNegativeInt = Number.isInteger(bpValue) && bpValue < 0;

      const systemBpValue = systemValue[isNegativeInt ? -bpValue : bpValue] || bpValue;

      return formatStyleResult(
        isNegativeInt ? -Number(systemBpValue) : systemBpValue,
        cssAttributes,
        formatter,
      );
    }

    // if there is no value for given breakpoint
    // look if we have default value
    // if we don't have default value, return empty object
    // if  default value is scalar return it
    // if default value is responsive:
    // - return value for given breakpoint
    // - or return the last value from longer of those
    if (Array.isArray(defaultValue)) {
      // if propValue is responsive, choose the longer array and select last value
      const arr = propValue.length >= defaultValue.length ? propValue : defaultValue;
      const val = arr[arr.length - 1];

      return formatStyleResult(systemValue[val] || val, cssAttributes, formatter);
    }

    // default value is scalar
    // in this case return the last value from propValue if is array
    const val = propValue[propValue.length - 1];
    const systemVal = systemValue[val] || val;

    return formatStyleResult(systemVal, cssAttributes, formatter);
  };

  styler.propNames = [propName];

  return (styler: any);
}

export function createNumericSystemStyle<T: Object>(
  propName: string,
  cssAttribute: string | Array<string>,
  systemName: string,
  defaultValue?: number | string | Array<number | string> | void,
): StyleFn<T> {
  return createSystemStyle(propName, cssAttribute, systemName, convertUnit, defaultValue);
}

export function createStringSystemStyle<T: Object>(
  propName: string,
  cssAttribute: string | Array<string>,
  systemName: string,
  defaultValue?: string | Array<string> | void,
): StyleFn<T> {
  return createSystemStyle(propName, cssAttribute, systemName, val => val, defaultValue);
}
