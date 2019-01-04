import theme from '../../defaultTheme';
import { createNumericStyle, createSimpleStyle, createStringStyle } from '../simpleStyleFactories';

describe('simple style factories', () => {
  describe('createStyler', () => {
    it('takes the value from default responsive value if is not specified in prop (with default)', () => {
      const style = createSimpleStyle<{ test?: any }>('test', 'test', val => val, ['1', '2']);

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default responsive)', () => {
      const style = createSimpleStyle<{ test?: any }>('test', 'test', val => val, ['1', '2']);

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();

      expect(style.apply({ test: ['1'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({ test: ['1', '3'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 2 })).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (with default simple)', () => {
      const style = createSimpleStyle<{ test?: any }>('test', 'test', val => val, '1');

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();

      expect(style.apply({ test: ['1'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({ test: ['1', '3'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 2 })).toMatchSnapshot();
    });

    it('takes last value from responsive value if breakpoint exceeds the range (without default)', () => {
      const style = createSimpleStyle<{ test?: any }>('test', 'test', val => val);

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();

      expect(style.apply({ test: ['1'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({ test: ['1', '3'] }, { theme, viewport: 2 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 2 })).toMatchSnapshot();
    });
  });

  describe('createStringStyler', () => {
    it('works correctly (returns string)', () => {
      const style = createStringStyle<{ test?: any }>('test', 'test');

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();
    });
  });

  describe('createNumericStyler', () => {
    it('works correctly (returns unit)', () => {
      const style = createNumericStyle<{ test?: any }>('test', 'test');

      expect(style.apply({ test: 1 }, { theme, viewport: 0 })).toMatchSnapshot();
      expect(style.apply({}, { theme, viewport: 0 })).toMatchSnapshot();
    });
  });
});
