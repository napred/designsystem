import React from 'react';
import { View } from 'react-native';
import { render } from 'react-native-testing-library';
import { createComponent, DesignSystem } from '../';

const DSView = createComponent('View', View);

it('works in react-native', () => {
  const { toJSON } = render(
    <DesignSystem>
      <DSView />,
    </DesignSystem>,
  );

  expect(toJSON()).toMatchSnapshot();
});

it('passes ref', () => {
  const ref = jest.fn();
  render(
    <DesignSystem>
      <DSView ref={ref} />,
    </DesignSystem>,
  );

  expect(ref).toHaveBeenCalledTimes(1);
});
