import { css } from 'emotion';
import React from 'react';
import { render } from 'react-testing-library';
import {
  createComponent,
  createSimpleCache,
  createStringStyle,
  createStyle,
  createStyleApplicator,
  DesignSystem,
} from '../';

const Box = createComponent('Box', 'div');

const customStyle = createStyle(['orientation'], (props: any, { theme }) => {
  let orientationCss = css`
    border-bottom-left-radius: 99999px;
    border-bottom-right-radius: 99999px;
  `;

  if (props.orientation === 'top') {
    orientationCss = css`
      border-top-left-radius: 99999px;
      border-top-right-radius: 99999px;
      border-bottom: 1px solid ${theme.color('greyLightest', 'white')};
    `;
  }

  if (props.orientation === 'right') {
    orientationCss = css`
      border-top-right-radius: 99999px;
      border-bottom-right-radius: 99999px;
      border-bottom: 1px solid ${theme.color('greyLightest', 'white')};
    `;
  }

  if (props.orientation === 'left') {
    orientationCss = css`
      border-top-left-radius: 99999px;
      border-bottom-left-radius: 99999px;
      border-bottom: 1px solid ${theme.color('greyLightest', 'white')};
    `;
  }

  return css`
    border: none;
    margin: 0;
    min-width: 0;
    outline: none;
    cursor: pointer;
    transition: background-color ease 0.3s;

    &:hover {
      background-color: ${theme.color('primaryLight')};
    }

    ${orientationCss}
  `;
},['orientation']);

const BoxDistinct = createComponent('BoxDistinct', 'button', { styles: [customStyle] });
BoxDistinct.defaultProps = { 
  bgColor: 'primary',
  color: 'greyLightest',
  display: 'inline-block',
  fontSize: 1,
  height: '2rem',
  lineHeight: 0.1,
  p: 0,
  type: 'button',
  width: '2rem',
 };

const BoxDistinct2 = createComponent('BoxDistinct2', 'div');
const BoxDistinct3 = createComponent('BoxDistinct3', 'span');

describe('createStyleApplicator', () => {
  const styles = [
    createStringStyle('test', 'test'),
    createStyle(
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

  it('creates distinct cache for same props but distinct components', () => {
    const cache = createSimpleCache();
    const { asFragment } = render(
      <DesignSystem styleApplicatorFactory={createStyleApplicator} cache={cache} styles={styles}>
        <BoxDistinct />
        <BoxDistinct />
        <BoxDistinct2 />
        <BoxDistinct2 />
        <BoxDistinct3 />
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
