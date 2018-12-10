import { createComponent, createStyle, css, IDSProps, StylerProps } from '@napred/browser';
import React, { ReactNode } from 'react';
import LoadingDots from '../LoadingDots';
import createVariants from '../styles/createVariants';
import getResponsiveValue from '../utils/getResponsiveValue';

type ButtonVariants = 'default' | 'lightTransparent' | 'primary' | 'transparent';

const btnVariants = createVariants<IProps>(
  'variant',
  {
    default: ({ disabled, hoverColor, bgColor }: IProps, { theme, viewport }) => {
      return css`
        background-color: ${theme.color(getResponsiveValue(bgColor, viewport) || 'white')};
        border-color: ${theme.color(getResponsiveValue(bgColor, viewport) || 'greyLight')};
        color: ${theme.color(bgColor ? 'white' : 'greyDark')};

        ${!disabled &&
          css`
            &:hover {
              border-color: ${theme.color(getResponsiveValue(bgColor, viewport) || 'primary')};
              color: ${theme.color(
                getResponsiveValue(hoverColor, viewport) || bgColor ? 'white' : 'primary',
              )};

              * {
                color: ${theme.color(
                  getResponsiveValue(hoverColor, viewport) || bgColor ? 'white' : 'primary',
                )};

                svg path:last-child {
                  fill: ${theme.color(
                    getResponsiveValue(hoverColor, viewport) || bgColor ? 'white' : 'primary',
                  )};
                }
              }
            }
          `};
      `;
    },
    lightTransparent: ({ disabled, hoverColor }: IProps, { theme, viewport }) => css`
      background-color: ${theme.color('lighterTransparent')};
      border-color: ${theme.color('turqoiseDark')};
      color: ${theme.color('turqoiseDark')};

      ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color('greyLightest')};
            border-color: ${theme.color('primary')};
            color: ${theme.color(getResponsiveValue(hoverColor, viewport) || 'primary')};

            * {
              color: ${theme.color(getResponsiveValue(hoverColor, viewport) || 'primary')};

              svg path:last-child {
                fill: ${theme.color(getResponsiveValue(hoverColor, viewport) || 'primary')};
              }
            }
          }
        `};
    `,
    primary: ({ disabled, hoverColor }: IProps, { theme, viewport }) => css`
      background-color: ${theme.color('primary')};
      color: ${theme.color('greyLighter')};
      border-color: transparent;

      ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color('primaryLight')};

            * {
              color: ${theme.color(getResponsiveValue(hoverColor, viewport) || 'greyLightest')};

              svg path:last-child {
                fill: ${theme.color(getResponsiveValue(hoverColor, viewport) || 'greyLightest')};
              }
            }
          }
        `};
    `,
    transparent: ({ disabled, hoverColor, color }: IProps, { theme, viewport }) => css`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.color(getResponsiveValue(color, viewport) || 'greyDark')};

      ${!disabled &&
        css`
          &:hover {
            color: ${theme.color(getResponsiveValue(hoverColor, viewport) || 'primary')};
          }
        `};
    `,
  },
  {
    cacheProps: ['variant', 'disabled', 'hoverColor'],
    stripProps: ['variant', 'hoverColor'],
  },
);

const ButtonComponent = createComponent<IProps & { variant: string }>('Button', 'button', {
  styles: [
    createStyle(
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
    createStyle(['loading'], ({ loading }) =>
      loading
        ? css`
            color: transparent;

            &:hover {
              color: transparent;
            }

            & *:not(div) {
              visibility: hidden;
            }
          `
        : '',
    ),
  ],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
ButtonComponent.defaultProps = {
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'inline-block',
  fontWeight: 600,
  position: 'relative',
  px: 3,
  py: 2,
};

interface IProps extends IDSProps, StylerProps {
  children?: ReactNode;
  disabled?: boolean;
  hoverColor?: string;
  loading?: boolean;
  loadingDotsProps?: IDSProps & StylerProps;
  onClick?: () => any;
  variant?: ButtonVariants | undefined;
  [key: string]: any;
}

function preventClick(e: MouseEvent) {
  e.preventDefault();
  e.stopPropagation();
}

function Button({
  disabled,
  children,
  hoverColor,
  loading,
  loadingDotsProps,
  variant = 'default',
  ...rest
}: IProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      hoverColor={hoverColor}
      loading={loading}
      onClickCapture={loading || disabled ? preventClick : undefined}
      variant={variant}
      {...rest}
    >
      {loading ? (
        <LoadingDots
          dark={variant !== 'primary'}
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
    </ButtonComponent>
  );
}

Button.defaultProps = {
  disabled: false,
  loading: false,
  loadingDotsProps: {},
};

export default Button;
