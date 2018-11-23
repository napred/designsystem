/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'react-testing-library';
import { createComponent, Box, DesignSystem } from '../';

const RedBox = createComponent('RedBox', Box, {
  defaultProps: {
    color: 'red',
  },
});

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

  it('works correctly with custom cache', () => {
    const recs = {};
    const cache = {
      get: jest.fn().mockImplementation(name => recs[name]),
      set: jest.fn().mockImplementation((name, val) => {
        recs[name] = val;
        return val;
      }),
    };

    // $FlowFixMe
    const { asFragment } = render(
      <DesignSystem cache={cache}>
        <Box as={RedBox} className="p1" color="green" p={1} m={0} bgColor="black">
          Green RedBox
        </Box>
        <Box as={RedBox} className="p1" color="green" p={1} m={0} bgColor="black">
          Green RedBox
        </Box>
        <Box as={RedBox} className="p2" color="green" p={2} m={0} bgColor="black">
          Green RedBox
        </Box>
        <Box as={RedBox} className="p2" color="green" p={2} m={0} bgColor="black">
          Green RedBox
        </Box>
        <Box as={RedBox} className="m1" color="green" p={2} m={1} bgColor="black">
          Green RedBox
        </Box>
        <Box as={RedBox} className="m1" color="green" p={2} m={1} bgColor="black">
          Green RedBox
        </Box>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();

    expect(cache.get).toHaveBeenCalledTimes(6);
    expect(cache.set).toHaveBeenCalledTimes(3);
    expect(recs).not.toEqual({});
  });
});
