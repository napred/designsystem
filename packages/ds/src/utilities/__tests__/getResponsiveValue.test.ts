import getResponsiveValue from '../getReponsiveValue';

describe('getResponsiveValue', () => {
  it('works correctly with array of default values', () => {
    expect(getResponsiveValue(1, [], [])).toBe(null);
    expect(getResponsiveValue(1, [], [1, 2])).toBe(2);
    expect(getResponsiveValue(1, [1, 2], [2, 3])).toBe(2);

    expect(getResponsiveValue(2, [1, 2], [2, 3])).toBe(2);
    expect(getResponsiveValue(2, [1, 2], [2, 3, 4])).toBe(4);
    expect(getResponsiveValue(2, [1, 2, 3], [2, 3])).toBe(3);

    expect(getResponsiveValue(1, [1, undefined, 2], [2, undefined, 3])).toBe(2);
    expect(getResponsiveValue(1, [1, null, 2], [2, undefined, 3])).toBe(null);
    expect(getResponsiveValue(1, [undefined, undefined, 2], [undefined, undefined, 3])).toBe(null);
    expect(getResponsiveValue(4, [undefined, undefined, 2], [undefined, undefined, 3])).toBe(2);
    expect(getResponsiveValue(3, [0, 1, 2, undefined, undefined], [1, 2, 3, 4])).toBe(4);
    expect(getResponsiveValue(4, [0, 1, 2, undefined, undefined], [1, 2, 3, 4])).toBe(4);
    expect(getResponsiveValue(4, [0, 1, 2, undefined, 5], [1, 2, 3, 4])).toBe(5);
  });

  it('works corretly with simple default value', () => {
    expect(getResponsiveValue(1, [], [])).toBe(null);
    expect(getResponsiveValue(1, [], 2)).toBe(2);
    expect(getResponsiveValue(1, [1, 2], 3)).toBe(2);

    expect(getResponsiveValue(2, [1, 2], 3)).toBe(2);
    expect(getResponsiveValue(2, [1, 2, 3], 4)).toBe(3);

    expect(getResponsiveValue(1, [1, undefined, 2], 9)).toBe(9);
    expect(getResponsiveValue(1, [1, null, 2], undefined)).toBe(null);
    expect(getResponsiveValue(1, [undefined, undefined, 2], undefined)).toBe(null);
    expect(getResponsiveValue(2, [undefined, undefined, 2], undefined)).toBe(2);
    expect(getResponsiveValue(4, [undefined, undefined, 2], 4)).toBe(2);
    expect(getResponsiveValue(3, [0, 1, 2, undefined, undefined], 4)).toBe(4);
    expect(getResponsiveValue(6, [0, 1, 2, undefined, undefined], 4)).toBe(4);
  });
});
