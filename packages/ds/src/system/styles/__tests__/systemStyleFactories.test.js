// @flow
/* eslint-disable max-nested-callbacks */

import { defaultTheme } from '../../';
import {
  createNumericSystemStyle,
  createStringSystemStyle,
  createSystemStyle,
} from '../systemStyleFactories';
import type { StyleFn } from '../../types';

describe('styler factories', () => {
  const defaultProps = {
    system: defaultTheme,
    viewport: 0,
  };

  beforeEach(() => {
    defaultProps.viewport = 0;
  });

  describe('createSystemStyle', () => {
    it('works with simple value (without default value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val);

      // $FlowFixMe
      expect(styler({ fontSize: 1, ...defaultProps })).toEqual({ 'font-size': 20 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val, 1);

      // $FlowFixMe
      expect(styler({ fontSize: 0, ...defaultProps })).toEqual({ 'font-size': 16 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ 'font-size': 20 });
    });

    it('works with responsive value (without default value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val);

      // $FlowFixMe
      expect(styler({ fontSize: ['1', '2'], ...defaultProps })).toEqual({ 'font-size': 20 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val, '2');

      // $FlowFixMe
      expect(styler({ fontSize: [0], ...defaultProps })).toEqual({ 'font-size': 16 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ 'font-size': 24 });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val, ['1', '2']);

      // $FlowFixMe
      expect(styler({ fontSize: ['1'], ...defaultProps })).toEqual({ 'font-size': 20 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ 'font-size': 20 });
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createSystemStyle(
        'test',
        'test',
        'spacing',
        val => val,
        ['1', '2'],
      );

      defaultProps.viewport = 1;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: 8 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: 8 });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createSystemStyle(
        'test',
        'test',
        'spacing',
        val => val,
        ['1', '2'],
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: 4 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: 4 });

      defaultProps.viewport = 2;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: 8 });
      // $FlowFixMe
      expect(styler({ test: ['1', '3'], ...defaultProps })).toEqual({ test: 16 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: 8 });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createSystemStyle(
        'test',
        'test',
        'spacing',
        val => val,
        '1',
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: 4 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: 4 });

      defaultProps.viewport = 2;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: 4 });
      // $FlowFixMe
      expect(styler({ test: ['1', '3'], ...defaultProps })).toEqual({ test: 16 });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: 4 });
    });
  });

  describe('createSystemNumericStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes');

      // $FlowFixMe
      expect(styler({ fontSize: 1, ...defaultProps })).toEqual({ 'font-size': '20px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', 1);

      // $FlowFixMe
      expect(styler({ fontSize: 0, ...defaultProps })).toEqual({ 'font-size': '16px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ 'font-size': '20px' });
    });

    it('works with responsive value (without default value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes');

      // $FlowFixMe
      expect(styler({ fontSize: ['1', '2'], ...defaultProps })).toEqual({ 'font-size': '20px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', '2');

      // $FlowFixMe
      expect(styler({ fontSize: [0], ...defaultProps })).toEqual({ 'font-size': '16px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ 'font-size': '24px' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler: StyleFn<{
        fontSize?: number | string | Array<number | string> | void,
      }> = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', ['1', '2']);

      // $FlowFixMe
      expect(styler({ fontSize: ['1'], ...defaultProps })).toEqual({ 'font-size': '20px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ 'font-size': '20px' });
    });
  });

  describe('createSystemStringStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler: StyleFn<{
        color?: string | Array<string> | void,
      }> = createNumericSystemStyle('color', 'color', 'colors');

      // $FlowFixMe
      expect(styler({ color: 'white', ...defaultProps })).toEqual({ color: '#FFFFFF' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler: StyleFn<{ color?: string | Array<string> | void }> = createStringSystemStyle(
        'color',
        'color',
        'colors',
        'white',
      );

      // $FlowFixMe
      expect(styler({ color: 'white', ...defaultProps })).toEqual({ color: '#FFFFFF' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ color: '#FFFFFF' });
    });

    it('works with responsive value (without default value)', () => {
      const styler: StyleFn<{ color?: string | Array<string> | void }> = createStringSystemStyle(
        'color',
        'color',
        'colors',
      );

      // $FlowFixMe
      expect(styler({ color: ['white', 'black'], ...defaultProps })).toEqual({ color: '#FFFFFF' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler: StyleFn<{
        color?: string | Array<string> | void,
      }> = createStringSystemStyle('color', 'color', 'colors', 'red');

      // $FlowFixMe
      expect(styler({ color: ['white', 'red'], ...defaultProps })).toEqual({ color: '#FFFFFF' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ color: '#EA2E49' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler: StyleFn<{
        color?: string | Array<string> | void,
      }> = createStringSystemStyle('color', 'color', 'colors', ['white', 'red']);

      // $FlowFixMe
      expect(styler({ color: ['white'], ...defaultProps })).toEqual({ color: '#FFFFFF' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ color: '#FFFFFF' });

      defaultProps.viewport = 1;

      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ color: '#EA2E49' });
    });
  });
});