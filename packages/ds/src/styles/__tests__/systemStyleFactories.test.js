// @flow
/* eslint-disable max-nested-callbacks */

import { createSystem } from '../../context';
import {
  createNumericSystemStyle,
  createStringSystemStyle,
  createSystemStyle,
} from '../systemStyleFactories';

describe('styler factories', () => {
  const system = createSystem({ baseStyles: [] });

  beforeEach(() => {
    system.viewport = 0;
  });

  describe('createSystemStyle', () => {
    it('works with simple value (without default value)', () => {
      const styler = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val);

      expect(styler.apply({ fontSize: 1 }, system)).toEqual({ 'font-size': 20 });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val, 1);

      expect(styler.apply({ fontSize: 0 }, system)).toEqual({ 'font-size': 16 });
      expect(styler.apply({}, system)).toEqual({ 'font-size': 20 });
    });

    it('works with responsive value (without default value)', () => {
      const styler = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val);

      expect(styler.apply({ fontSize: ['1', '2'] }, system)).toEqual({ 'font-size': 20 });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val, '2');

      expect(styler.apply({ fontSize: [0] }, system)).toEqual({ 'font-size': 16 });
      expect(styler.apply({}, system)).toEqual({ 'font-size': 24 });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler = createSystemStyle('fontSize', 'font-size', 'fontSizes', val => val, [
        '1',
        '2',
      ]);

      expect(styler.apply({ fontSize: ['1'] }, system)).toEqual({ 'font-size': 20 });
      expect(styler.apply({}, system)).toEqual({ 'font-size': 20 });
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const styler = createSystemStyle('test', 'test', 'spacing', val => val, ['1', '2']);

      system.viewport = 1;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: 8 });
      expect(styler.apply({}, system)).toEqual({ test: 8 });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const styler = createSystemStyle('test', 'test', 'spacing', val => val, ['1', '2']);

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: 4 });
      expect(styler.apply({}, system)).toEqual({ test: 4 });

      system.viewport = 2;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: 8 });
      expect(styler.apply({ test: ['1', '3'] }, system)).toEqual({ test: 16 });
      expect(styler.apply({}, system)).toEqual({ test: 8 });
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const styler = createSystemStyle('test', 'test', 'spacing', val => val, '1');

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: 4 });
      expect(styler.apply({}, system)).toEqual({ test: 4 });

      system.viewport = 2;

      expect(styler.apply({ test: ['1'] }, system)).toEqual({ test: 4 });
      expect(styler.apply({ test: ['1', '3'] }, system)).toEqual({ test: 16 });
      expect(styler.apply({}, system)).toEqual({ test: 4 });
    });
  });

  describe('createSystemNumericStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes');

      expect(styler.apply({ fontSize: 1 }, system)).toEqual({ 'font-size': '20px' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', 1);

      expect(styler.apply({ fontSize: 0 }, system)).toEqual({ 'font-size': '16px' });
      expect(styler.apply({}, system)).toEqual({ 'font-size': '20px' });
    });

    it('works with responsive value (without default value)', () => {
      const styler = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes');

      expect(styler.apply({ fontSize: ['1', '2'] }, system)).toEqual({ 'font-size': '20px' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', '2');

      expect(styler.apply({ fontSize: [0] }, system)).toEqual({ 'font-size': '16px' });
      expect(styler.apply({}, system)).toEqual({ 'font-size': '24px' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler = createNumericSystemStyle('fontSize', 'font-size', 'fontSizes', ['1', '2']);

      expect(styler.apply({ fontSize: ['1'] }, system)).toEqual({ 'font-size': '20px' });
      expect(styler.apply({}, system)).toEqual({ 'font-size': '20px' });
    });
  });

  describe('createSystemStringStyler', () => {
    it('works with simple value (without default value)', () => {
      const styler = createNumericSystemStyle('color', 'color', 'colors');

      expect(styler.apply({ color: 'white' }, system)).toEqual({ color: '#FFFFFF' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with simple value (with default value)', () => {
      const styler = createStringSystemStyle('color', 'color', 'colors', 'white');

      expect(styler.apply({ color: 'white' }, system)).toEqual({ color: '#FFFFFF' });
      expect(styler.apply({}, system)).toEqual({ color: '#FFFFFF' });
    });

    it('works with responsive value (without default value)', () => {
      const styler = createStringSystemStyle('color', 'color', 'colors');

      expect(styler.apply({ color: ['white', 'black'] }, system)).toEqual({ color: '#FFFFFF' });
      expect(styler.apply({}, system)).toEqual({});
    });

    it('works with responsive value (with default simple value)', () => {
      const styler = createStringSystemStyle('color', 'color', 'colors', 'red');

      expect(styler.apply({ color: ['white', 'red'] }, system)).toEqual({ color: '#FFFFFF' });
      expect(styler.apply({}, system)).toEqual({ color: '#EA2E49' });
    });

    it('works with responsive value (with default responsive value)', () => {
      const styler = createStringSystemStyle('color', 'color', 'colors', ['white', 'red']);

      expect(styler.apply({ color: ['white'] }, system)).toEqual({ color: '#FFFFFF' });
      expect(styler.apply({}, system)).toEqual({ color: '#FFFFFF' });

      system.viewport = 1;

      expect(styler.apply({}, system)).toEqual({ color: '#EA2E49' });
    });
  });
});
