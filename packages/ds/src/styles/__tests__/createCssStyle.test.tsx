import React from 'react';
import { render } from 'react-testing-library';

import { createComponent, createCssStyle, css, DesignSystem } from '../../';

const Box = createComponent('Box', 'div');

describe('createCssStyle', () => {
  it('works with simple string', () => {
    const styles = [createCssStyle(['test'], 'color: blue;')];
    const { asFragment } = render(
      <DesignSystem styles={styles}>
        <Box />
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('works with simple style', () => {
    const styles = [
      createCssStyle(
        ['test'],
        css`
          color: blue;
        `,
      ),
    ];
    const { asFragment } = render(
      <DesignSystem styles={styles}>
        <Box />
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('works with simple object', () => {
    const styles = [createCssStyle(['test'], { color: 'blue' })];
    const { asFragment } = render(
      <DesignSystem styles={styles}>
        <Box />
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('works with function', () => {
    const styles = [
      createCssStyle(
        ['test'],
        (props: { color: string }) =>
          css`
            color: ${props.color};
          `,
      ),
    ];
    const { asFragment } = render(
      <DesignSystem styles={styles}>
        <Box color="blue" />
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
