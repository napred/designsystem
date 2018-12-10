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
