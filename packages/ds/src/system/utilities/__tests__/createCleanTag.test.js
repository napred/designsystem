/**
 * @flow
 */

import React from 'react';
import { render } from 'enzyme';
import { createCleanTag } from '../../';

function TestComponent(props: Object) {
  return <span {...props}>Test</span>;
}

describe('createCleanTag', () => {
  it('creates a clean tag from string component', () => {
    const Div = createCleanTag('div');

    const wrapper = render(<Div style={{ color: 'blue' }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('creates a clean tag from custom component', () => {
    const C = createCleanTag(TestComponent);

    const wrapper = render(<C style={{ color: 'blue' }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('allows to override component', () => {
    const Div = createCleanTag('div');
    const wrapper = render(<Div as={TestComponent} style={{ color: 'blue' }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('allows to blacklist props from being passed to underlying component', () => {
    const Div = createCleanTag('div', ['style']);

    expect(
      render(<Div as={TestComponent} dir="rtl" style={{ color: 'blue' }} />),
    ).toMatchSnapshot();
    expect(
      render(
        <Div as={TestComponent} blacklist={['dir', 'style']} dir="rtl" style={{ color: 'blue' }} />,
      ),
    ).toMatchSnapshot();
  });
});
