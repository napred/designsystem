import cleanProps from '../cleanProps';

describe('cleanProps', () => {
  it('strips unknown props', () => {
    expect(
      cleanProps({ 'data-test': 1, href: '/', color: 'blue', someUnknownProp: true }, [
        'color',
        'someUnknownProp',
      ]),
    ).toEqual({
      'data-test': 1,
      href: '/',
    });
  });
});
