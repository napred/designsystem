import convert from '../convertUnit';

describe('mixins/convertUnit', () => {
  it('parses integers as pixels', () => {
    expect(convert('10')).toBe('10px');
    expect(convert('0')).toBe('0px');
    expect(convert(0)).toBe('0px');
    expect(convert(10)).toBe('10px');
    expect(convert(-10)).toBe('-10px');
  });

  it('parses floats as percents', () => {
    expect(convert(1 / 3)).toBe('33.33333333333333%');
    expect(convert(1 / 2)).toBe('50%');
    expect(convert(-2 / 4)).toBe('-50%');
  });

  it('passes through exact units', () => {
    expect(convert('10px')).toBe('10px');
    expect(convert('100%')).toBe('100%');
    expect(convert('1rem')).toBe('1rem');
  });
});
