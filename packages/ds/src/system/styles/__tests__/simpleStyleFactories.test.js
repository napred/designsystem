// @flow
/* eslint-disable max-nested-callbacks */

import { defaultTheme } from '../../';
import { createNumericStyle, createStringStyle, createStyle } from '../simpleStyleFactories';
import type { StyleFn } from '../../types';

describe('simple style factories', () => {
  const defaultProps = {
    system: defaultTheme,
    viewport: 0,
  };

  beforeEach(() => {
    defaultProps.viewport = 0;
  });

  describe('createStyler', () => {
    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStyle(
        'test',
        'test',
        val => val,
        ['1', '2'],
      );

      defaultProps.viewport = 1;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '2' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '2' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStyle(
        'test',
        'test',
        val => val,
        ['1', '2'],
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '1' });

      defaultProps.viewport = 2;
      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '2' });
      // $FlowFixMe
      expect(styler({ test: ['1', '3'], ...defaultProps })).toEqual({ test: '3' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '2' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStyle(
        'test',
        'test',
        val => val,
        '1',
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '1' });

      defaultProps.viewport = 2;
      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler({ test: ['1', '3'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '1' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (without default)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStyle(
        'test',
        'test',
        val => val,
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});

      defaultProps.viewport = 2;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler({ test: ['1', '3'], ...defaultProps })).toEqual({ test: '3' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });
  });

  describe('createStringStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        'test',
      );

      const props = {
        test: '1',
        ...defaultProps,
      };

      // $FlowFixMe
      expect(styler(props)).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        'test',
        '2',
      );

      // $FlowFixMe
      expect(styler({ test: '1', ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '2' });
    });

    it('works with responsive value (without default value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        'test',
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        'test',
        '2',
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '2' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        ['testLeft', 'testRight'],
        ['3', '2'],
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ testLeft: '1', testRight: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ testLeft: '3', testRight: '3' });
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        ['testLeft', 'testRight'],
        ['3', '2'],
      );

      defaultProps.viewport = 1;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ testLeft: '2', testRight: '2' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ testLeft: '2', testRight: '2' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createStringStyle(
        'test',
        ['testLeft', 'testRight'],
        ['3', '2'],
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ testLeft: '1', testRight: '1' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ testLeft: '3', testRight: '3' });

      defaultProps.viewport = 2;

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ testLeft: '2', testRight: '2' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ testLeft: '2', testRight: '2' });
    });
  });

  describe('createNumericStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createNumericStyle(
        'test',
        'test',
      );

      // $FlowFixMe
      expect(styler({ test: '1', ...defaultProps })).toEqual({ test: '1px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createNumericStyle(
        'test',
        'test',
        '2',
      );

      // $FlowFixMe
      expect(styler({ test: '1', ...defaultProps })).toEqual({ test: '1px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '2px' });
    });

    it('works with responsive value (without default value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createNumericStyle(
        'test',
        'test',
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createNumericStyle(
        'test',
        'test',
        '2',
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '2px' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler: StyleFn<{ test?: string | Array<string> | void }> = createNumericStyle(
        'test',
        'test',
        ['1', '2'],
      );

      // $FlowFixMe
      expect(styler({ test: ['1'], ...defaultProps })).toEqual({ test: '1px' });
      // $FlowFixMe
      expect(styler(defaultProps)).toEqual({ test: '1px' });
    });
  });
});
