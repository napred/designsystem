// @flow
/* eslint-disable max-nested-callbacks */

import defaultTheme from '../../defaultTheme';
import { createNullCache } from '../../cache';
import { createSystem } from '../../system';
import { createStyleApplicator } from '../';
import { createNumericStyle, createStringStyle, createStyle } from '../simpleStyleFactories';

describe('simple style factories', () => {
  const system = createSystem({
    cache: createNullCache(),
    styleApplicatorFactory: createStyleApplicator,
    theme: defaultTheme,
  });

  beforeEach(() => {
    system.viewport = 0;
  });

  describe('createStyler', () => {
    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styler = createStyle('test', 'test', val => val, ['1', '2']);

      system.viewport = 1;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '2' });
      expect(styler.apply({}, system)).toEqual({ test: '2' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const styler = createStyle('test', 'test', val => val, ['1', '2']);

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({ test: '1' });

      system.viewport = 2;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '2' });
      expect(styler.apply({ test: ['1', '3'] }, system)).toEqual({ test: '3' });
      expect(styler.apply({}, system)).toEqual({ test: '2' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const styler = createStyle('test', 'test', val => val, '1');

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({ test: '1' });

      system.viewport = 2;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({ test: ['1', '3'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({ test: '1' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (without default)', () => {
      const styler = createStyle('test', 'test', val => val);

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({});

      system.viewport = 2;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({ test: ['1', '3'] }, system)).toEqual({ test: '3' });
      expect(styler.apply({}, system)).toEqual({});
    });
  });

  describe('createStringStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler = createStringStyle('test', 'test');

      const props = {
        test: '1',
      };

      expect(styler.apply(props, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler = createStringStyle('test', 'test', '2');

      expect(styler.apply({ test: '1' }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({ test: '2' });
    });

    it('works with responsive value (without default value)', () => {
      const styler = createStringStyle('test', 'test');

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler = createStringStyle('test', 'test', '2');

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1' });
      expect(styler.apply({}, system)).toEqual({ test: '2' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler = createStringStyle('test', ['testLeft', 'testRight'], ['3', '2']);

      expect(styler.apply({ test: ['1'] }, system)).toEqual({
        testLeft: '1',
        testRight: '1',
      });
      expect(styler.apply({}, system)).toEqual({ testLeft: '3', testRight: '3' });
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styler = createStringStyle('test', ['testLeft', 'testRight'], ['3', '2']);

      system.viewport = 1;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({
        testLeft: '2',
        testRight: '2',
      });
      expect(styler.apply({}, system)).toEqual({ testLeft: '2', testRight: '2' });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default)', () => {
      const styler = createStringStyle('test', ['testLeft', 'testRight'], ['3', '2']);

      expect(styler.apply({ test: ['1'] }, system)).toEqual({
        testLeft: '1',
        testRight: '1',
      });
      expect(styler.apply({}, system)).toEqual({ testLeft: '3', testRight: '3' });

      system.viewport = 2;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({
        testLeft: '2',
        testRight: '2',
      });
      expect(styler.apply({}, system)).toEqual({ testLeft: '2', testRight: '2' });
    });
  });

  describe('createNumericStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler = createNumericStyle('test', 'test');

      expect(styler.apply({ test: '1' }, system)).toEqual({ test: '1px' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler = createNumericStyle('test', 'test', '2');

      expect(styler.apply({ test: '1' }, system)).toEqual({ test: '1px' });
      expect(styler.apply({}, system)).toEqual({ test: '2px' });
    });

    it('works with responsive value (without default value)', () => {
      const styler = createNumericStyle('test', 'test');

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1px' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler = createNumericStyle('test', 'test', '2');

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1px' });
      expect(styler.apply({}, system)).toEqual({ test: '2px' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler = createNumericStyle('test', 'test', ['1', '2']);

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: '1px' });
      expect(styler.apply({}, system)).toEqual({ test: '1px' });
    });
  });
});
