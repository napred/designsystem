import theme from '../../defaultTheme';
import {
  createNumericSystemStyle,
  createStringSystemStyle,
  createSystemStyle,
} from '../systemStyleFactories';

describe('styler factories', () => {
  describe('createSystemStyle', () => {
    it('works with simple value (without default value)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val);

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();
    });

    it('works with simple value (with default value)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val, 1);

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();
    });

    it('works with responsive value (without default value)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val);

      expect(style.apply({ test: ['1', '2'] }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();

      expect(style.apply({ test: ['1', '2'] }, { theme, viewport: 1 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 1 })).toMatchSnapshot();
    });

    it('works with responsive value (with default simple value)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val, '2');

      expect(style.apply({ test: [0] }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();
    });

    it('works with responsive value (with default responsive value)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val, [
        '1',
        '2',
      ]);

      expect(style.apply({ test: ['1'] }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();
    });

    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val, [
        '1',
        '2',
      ]);

      expect(style.apply({ test: ['1'] }, { theme, viewport: 1 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 1 })).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val, [
        '1',
        '2',
      ]);

      expect(style.apply({ test: ['1'] }, { theme, viewport: 1 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 1 })).toMatchSnapshot();

      expect(style.apply({ test: ['1'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 2 })).toMatchSnapshot();

      expect(style.apply({ test: ['1', '3'] }, { theme, viewport: 2 })).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const style = createSystemStyle<{ test?: any }>('test', 'test', 'spacing', val => val, '1');

      expect(style.apply({ test: ['1'] }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({ test: ['1', '3'] }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();

      expect(style.apply({ test: ['1'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({ test: ['1', '3'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 2 })).toMatchSnapshot();
    });
  });

  describe('createSystemNumericStyler', () => {
    it('works correctly (returns unit)', () => {
      const style = createNumericSystemStyle<{ test?: any }>('test', 'test', 'spacing');

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
    });
  });

  describe('createSystemStringStyler', () => {
    it('works correctly (returns string)', () => {
      const style = createStringSystemStyle<{ test?: any }>('test', 'test', 'colors');

      expect(style.apply({ test: 'white' }, { theme, viewport: 0 })).toMatchSnapshot();
    });
  });
});
