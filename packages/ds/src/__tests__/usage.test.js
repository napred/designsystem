/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Box, DesignSystem } from '../';

function RedBox(props) {
  return <Box {...props} />;
}

RedBox.defaultProps = {
  color: 'red',
};

describe('design system usage', () => {
  it('works correctly with default system stylers', () => {
    // $FlowFixMe
    const { asFragment } = render(
      <DesignSystem>
        <Box>Default Box</Box>
        <Box color="blue">Blue box</Box>
        <Box as="h1" color="green">
          Green title
        </Box>
        <Box as={RedBox} color="green" p={1} m={0} bgColor="black">
          Green RedBox
        </Box>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
