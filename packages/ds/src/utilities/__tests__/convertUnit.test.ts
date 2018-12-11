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
    expect(convert('-10px')).toBe('-10px');
    expect(convert('100%')).toBe('100%');
    expect(convert('-100%')).toBe('-100%');
    expect(convert('1rem')).toBe('1rem');
    expect(convert('-1rem')).toBe('-1rem');
  });

  it('allows to multiply values', () => {
    expect(convert('10', 2)).toBe('20px');
    expect(convert('0', 2)).toBe('0px');
    expect(convert(0, 2)).toBe('0px');
    expect(convert(10, 2)).toBe('20px');
    expect(convert(-10, 2)).toBe('-20px');
    expect(convert(1 / 3, 2)).toBe('66.66666666666666%');
    expect(convert(1 / 2, 2)).toBe('100%');
    expect(convert(-2 / 4, 2)).toBe('-100%');
    expect(convert('10px', 2)).toBe('20px');
    expect(convert('-10px', 2)).toBe('-20px');
    expect(convert('-10 px', 2)).toBe('-20px');
    expect(convert('100%', 2)).toBe('200%');
    expect(convert('-100%', 2)).toBe('-200%');
    expect(convert('-100 %', 2)).toBe('-200%');
    expect(convert('-33.33%', 2)).toBe('-66.66%');
    expect(convert('-33.33 %', 2)).toBe('-66.66%');
    expect(convert('1rem', 2)).toBe('2rem');
    expect(convert('-1rem', 2)).toBe('-2rem');
    expect(convert('-1 rem', 2)).toBe('-2rem');
    expect(convert('-1.5rem', 2)).toBe('-3rem');
    expect(convert('-1.5 rem', 2)).toBe('-3rem');
  });
});
