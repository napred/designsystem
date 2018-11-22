// @flow

import createComponent from '../createComponent';

describe('createComponent', () => {
  it('creates a system component', () => {
    const BlueLink = createComponent('Link', 'a', undefined, { color: 'blue' });

    expect(typeof BlueLink).toBe('function');
  });
});
