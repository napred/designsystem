// @flow

import cleanProps from '../cleanProps';

describe('cleanProps', () => {
  it('strips unknown props', () => {
    expect(cleanProps({ 'data-test': 1, href: '/', color: 'blue', someUnknownProp: true })).toEqual(
      {
        color: 'blue',
        'data-test': 1,
        href: '/',
      },
    );
  });
});
