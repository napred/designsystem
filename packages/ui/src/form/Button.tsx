import { createComponent, createCssStyle, DSProps } from '@napred/ds';
import { css } from 'emotion';
import React, { ReactElement } from 'react';
import LoadingDots from '../LoadingDots';
import createVariants from '../styles/createVariants';

type ButtonVariants = 'default' | 'lightTransparent' | 'primary' | 'transparent';

const btnVariants = createVariants<
  any,
  { disabled?: boolean; hoverColor?: string; variant?: ButtonVariants }
>(
  'variant',
  {
    default: ({ disabled, hoverColor, bgColor }, { theme }) => css`
      background-color: ${theme.color(bgColor || 'white')};
      border-color: ${theme.color(bgColor || 'greyLight')};
      color: ${theme.color(bgColor ? 'white' : 'greyDark')};

      ${!disabled &&
        css`
          &:hover {
            border-color: ${theme.color(bgColor || 'primary')};
            color: ${theme.color(hoverColor, bgColor ? 'white' : 'primary')};

            * {
              color: ${theme.color(hoverColor, bgColor ? 'white' : 'primary')};

              svg path:last-child {
                fill: ${theme.color(hoverColor, bgColor ? 'white' : 'primary')};
              }
            }
          }
        `};
    `,
    lightTransparent: ({ disabled, hoverColor }, { theme }) => css`
      background-color: ${theme.color('lighterTransparent')};
      border-color: ${theme.color('turqoiseDark')};
      color: ${theme.color('turqoiseDark')};

      ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color('greyLightest')};
            border-color: ${theme.color('primary')};
            color: ${theme.color(hoverColor, 'primary')};

            * {
              color: ${theme.color(hoverColor, 'primary')};

              svg path:last-child {
                fill: ${theme.color(hoverColor, 'primary')};
              }
            }
          }
        `};
    `,
    primary: ({ disabled, hoverColor }, { theme }) => css`
      background-color: ${theme.color('primary')};
      color: ${theme.color('greyLighter')};

      ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color('primaryLight')};

            * {
              color: ${theme.color(hoverColor, 'greyLightest')};

              svg path:last-child {
                fill: ${theme.color(hoverColor, 'greyLightest')};
              }
            }
          }
        `};
    `,
    transparent: ({ disabled, hoverColor, color }, { theme }) => css`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.color(color || 'greyDark')};

      ${!disabled &&
        css`
          &:hover {
            color: ${theme.get(hoverColor || 'primary')};
          }
        `};
    `,
  },
  {
    cacheProps: ['variant', 'disabled', 'hoverColor'],
    stripProps: ['variant', 'disabled', 'hoverColor'],
  },
);

const Button = createComponent('Button', 'button', {
  styles: [
    createCssStyle(
      ['disabled'],
      ({ disabled }) => css`
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
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Button.defaultProps = {
  borderColor: 'transparent',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'inline-block',
  fontWeight: 600,
  position: 'relative',
  px: 3,
  py: 2,
};

interface IProps extends DSProps {
  children?: ReactElement<any>;
  disabled: boolean;
  hoverColor?: string;
  loading: boolean;
  loadingDotsProps: DSProps;
  onClick?: () => any;
  variant?: ButtonVariants;
}

function preventClick(e: MouseEvent) {
  e.preventDefault();
  e.stopPropagation();
}

export default function ButtonComponent({
  disabled,
  children,
  hoverColor,
  loading,
  loadingDotsProps,
  variant,
  ...rest
}: IProps) {
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
          {...loadingDotsProps}
        />
      ) : null}
      {children}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  disabled: false,
  loading: false,
  loadingDotsProps: {},
};
