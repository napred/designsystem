// @flow

import { createCssStyle, createComponent, type StyleFn } from '@napred/ds';
import { css } from 'emotion';
import * as React from 'react';
import LoadingDots from '../LoadingDots';
import createVariants from '../styles/createVariants';

type ButtonVariants = 'default' | 'lightTransparent' | 'primary' | 'transparent';

// $FlowExpectError
const btnVariants: StyleFn<{ hoverColor?: string, variant?: ButtonVariants }> = createVariants(
  'variant',
  {
    primary: [
      ['hoverColor', 'loading', 'variant'],
      ({ disabled, hoverColor }, { theme }) => css`
        background-color: ${theme.get('color', 'primary')};
        color: ${theme.get('color', 'greyLighter')};

        ${!disabled &&
          css`
            &:hover {
              background-color: ${theme.get('color', 'primaryLight')};

              * {
                color: ${theme.get('color', hoverColor, 'greyLightest')};

                svg path:last-child {
                  fill: ${theme.get('color', hoverColor, 'greyLightest')};
                }
              }
            }
          `};
      `,
      ['hoverColor', 'loading', 'variant'],
    ],
    lightTransparent: [
      ['hoverColor', 'loading', 'variant'],
      ({ disabled, hoverColor }, { theme }) => css`
        background-color: ${theme.get('color', 'lighterTransparent')};
        border-color: ${theme.get('color', 'turqoiseDark')};
        color: ${theme.get('color', 'turqoiseDark')};

        ${!disabled &&
          css`
            &:hover {
              background-color: ${theme.get('color', 'greyLightest')};
              border-color: ${theme.get('color', 'primary')};
              color: ${theme.get('color', hoverColor, 'primary')};

              * {
                color: ${theme.get('color', hoverColor, 'primary')};

                svg path:last-child {
                  fill: ${theme.get('color', hoverColor, 'primary')};
                }
              }
            }
          `};
      `,
      ['hoverColor', 'loading', 'variant'],
    ],
    transparent: [
      ['hoverColor', 'loading', 'variant'],
      ({ disabled, hoverColor, color }, { theme }) => css`
        background-color: transparent;
        border-color: transparent;
        color: ${color ? theme.get('color', color) : theme.get('color', 'greyDark')};

        ${!disabled &&
          css`
            &:hover {
              color: ${hoverColor ? theme.get('color', hoverColor) : theme.get('color', 'primary')};
            }
          `};
      `,
      ['hoverColor', 'loading', 'variant'],
    ],
    default: [
      ['hoverColor', 'loading', 'variant'],
      ({ disabled, hoverColor, bgColor }, { theme }) => css`
        background-color: ${bgColor ? theme.get('color', bgColor) : theme.get('color', 'white')};
        border-color: ${bgColor ? theme.get('color', bgColor) : theme.get('color', 'greyLight')};
        color: ${bgColor ? theme.get('color', 'white') : theme.get('color', 'greyDark')};

        ${!disabled &&
          css`
            &:hover {
              border-color: ${bgColor
                ? theme.get('color', bgColor)
                : theme.get('color', 'primary')};
              color: ${theme.get('color', hoverColor, bgColor ? 'white' : 'primary')};

              * {
                color: ${theme.get('color', hoverColor, bgColor ? 'white' : 'primary')};

                svg path:last-child {
                  fill: ${theme.get('color', hoverColor, bgColor ? 'white' : 'primary')};
                }
              }
            }
          `};
      `,
      ['hoverColor', 'loading', 'variant'],
    ],
  },
);

const Button = createComponent('Button', 'button', {
  styles: [
    createCssStyle(
      ['disabled'],
      ({ disabled }) => css`
        border-color: transparent;
        outline: none;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        appearance: none;
        user-select: none;
        transition: all 0.6s ease;
        overflow: hidden;
        &:focus {
          outline: 0;
        }

        ${disabled
          ? css`
              cursor: not-allowed;
              filter: grayscale(10%);
              opacity: 0.6;
            `
          : css`
              cursor: pointer;
            `};
      `,
      [],
    ),
    btnVariants,
    createCssStyle(
      ['loading'],
      ({ loading }) => css`
        ${!loading
          ? ''
          : css`
              color: transparent;

              &:hover {
                color: transparent;
              }

              & > *:not(.a-ld) {
                visibility: hidden;
              }
            `};
      `,
    ),
  ],
  defaultProps: {
    borderWidth: '1px',
    borderRadius: 0,
    borderStyle: 'solid',
    display: 'inline-block',
    fontWeight: 600,
    position: 'relative',
    px: 3,
    py: 2,
  },
});

type Props = {
  children: React.Node | React.Node[],
  disabled?: boolean,
  hoverColor?: ?string,
  loading?: ?boolean,
  onClick?: Function,
  variant?: ButtonVariants,
};

function preventClick(e: SyntheticMouseEvent<any>) {
  e.preventDefault();
  e.stopPropagation();
}

export default function ButtonComponent({
  disabled,
  children,
  hoverColor,
  loading,
  variant,
  ...rest
}: Props) {
  const lightDots = variant === 'primary';

  return (
    <Button
      disabled={disabled}
      hoverColor={hoverColor}
      loading={loading}
      onClickCapture={loading || disabled ? preventClick : undefined}
      variant={variant}
      {...rest}
    >
      {loading ? (
        <LoadingDots
          dark={!lightDots}
          p={0}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
      ) : null}
      {children}
    </Button>
  );
}
