// import { createComponent } from '@napred/ds';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { render } from 'react-native-testing-library';
import { inspect } from 'util';
// import DesignSystem from '../DesignSystem';

// const DSView = createComponent('View', View);

it('works in react-native', () => {
  const { toJSON } = render(
    // <DesignSystem>
    <View />,
    // </DesignSystem>,
  );

  inspect(StyleSheet.create({}));

  expect(toJSON()).toMatchSnapshot();
});
