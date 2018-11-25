/**
 * @jest-environment jsdom
 */

import { css } from 'emotion';
import React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { render } from 'react-testing-library';
import {
  Box,
  createCssStyle,
  createStringStyle,
  createStyleApplicator,
  DesignSystem,
} from '../../';

describe('createStyleApplicator', () => {
  const styles = [
    createStringStyle('test', 'test'),
    createCssStyle(
      ['pos'],
      (props: { pos?: string }) => css`
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
