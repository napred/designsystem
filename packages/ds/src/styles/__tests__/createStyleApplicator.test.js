/**
 * @flow
 * @jest-environment jsdom
 */

import React from 'react';
import { css } from 'emotion';
import { render } from 'react-testing-library';
import {
  Box,
  DesignSystem,
  createCssStyle,
  createStringStyle,
  createStyleApplicator,
} from '../../';

describe('createStyleApplicator', () => {
  const styles = [
    createStringStyle('test', 'test'),
    createCssStyle(
      ['pos'],
      props => css`
        position: ${props.pos};
      `,
    ),
  ];

  it('works correctly for no props', () => {
    const { asFragment } = render(
      <DesignSystem styleApplicatorFactory={createStyleApplicator} styles={styles}>
        <Box />
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('works correctly for props and viewport', () => {
    const { asFragment, rerender } = render(
      <DesignSystem styleApplicatorFactory={createStyleApplicator} styles={styles}>
        <Box color="#ff0000" />
        <Box color={['#ff0000', '#000000']} />
      </DesignSystem>,
    );

    const viewport0 = asFragment();

    expect(viewport0).toMatchSnapshot();

    // now change viewport
    rerender(
      <DesignSystem is={1} styleApplicatorFactory={createStyleApplicator} styles={styles}>
        <Box color="#ff0000" />
        <Box color={['#ff0000', '#000000']} />
      </DesignSystem>,
    );

    const viewport1 = asFragment();

    expect(viewport1).toMatchSnapshot();

    expect(viewport1).not.toEqual(viewport0);
  });
});
