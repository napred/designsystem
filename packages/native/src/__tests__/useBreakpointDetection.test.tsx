import React from 'react';
import { Dimensions, Text } from 'react-native';
import { render } from 'react-native-testing-library';
import { createComponent, DesignSystem } from '../';

jest.mock('Dimensions');

const DSText = createComponent('DSText', Text);

describe('useBreakpointDetection', () => {
  it('works correctly', () => {
    Dimensions.set({
      screen: {
        fontScale: 1,
        height: 667,
        scale: 3,
        width: 375,
      },
      window: {
        fontScale: 1,
        height: 667,
        scale: 3,
        width: 375,
      },
    });
    const tree = (
      <DesignSystem>
        <DSText color={['tomato', 'orchid', 'navy', 'cornsilk']} />
      </DesignSystem>
    );
    const { toJSON, unmount, update } = render(tree);

    expect(toJSON()).toMatchSnapshot();

    update(tree); // component did mount

    // change to ipad
    Dimensions.set({
      screen: {
        fontScale: 1,
        height: 1366,
        scale: 2,
        width: 1024,
      },
      window: {
        fontScale: 1,
        height: 1366,
        scale: 2,
        width: 1024,
      },
    });
    // @ts-ignore
    Dimensions._update();

    expect(toJSON()).toMatchSnapshot();

    // change to something bigger
    Dimensions.set({
      screen: {
        fontScale: 1,
        height: 1080,
        scale: 1,
        width: 1920,
      },
      window: {
        fontScale: 1,
        height: 1080,
        scale: 1,
        width: 1920,
      },
    });

    // @ts-ignore
    Dimensions._update();

    expect(toJSON()).toMatchSnapshot();

    unmount();
  });
});
