import {
  arrayize,
  createComponent,
  createStyle,
  createVariants,
  DSProps,
  getResponsiveValue,
} from '@napred/native';
import { Box, Text } from '@napred/uniprimitives';
import React, { ComponentType, ReactNode } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

type ButtonVariants = 'default' | 'lightTransparent' | 'primary' | 'transparent';

const btnVariants = createVariants<IProps>(
  'variant',
  {
    default: ({ bgColor }: IProps, { theme, viewport }) => ({
      backgroundColor: theme.color(
        (getResponsiveValue(viewport, arrayize(bgColor)) as string) || 'white',
      ),
      borderColor: theme.color(
        (getResponsiveValue(viewport, arrayize(bgColor)) as string) || 'greyLight',
      ),
      color: theme.color(bgColor ? 'white' : 'greyDark'),
    }),
    lightTransparent: (_: IProps, { theme }) => ({
      backgroundColor: theme.color('lighterTransparent'),
      borderColor: theme.color('turqoiseDark'),
      color: theme.color('turqoiseDark'),
    }),
    primary: (_: IProps, { theme }) => ({
      backgroundColor: theme.color('primary'),
      borderColor: 'transparent',
      color: theme.color('greyLighter'),
    }),
    transparent: ({ color }: IProps, { theme, viewport }) => ({
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: theme.color((getResponsiveValue(viewport, arrayize(color)) as string) || 'greyDark'),
    }),
  },
  {
    cacheProps: ['variant', 'disabled', 'hoverColor'],
    stripProps: ['variant', 'hoverColor'],
  },
);

const ButtonComponent = createComponent<IProps & { variant: string }>('Button', Box, {
  styles: [
    createStyle(
      ['disabled'],
      ({ disabled }) => ({
        appearance: 'none',
        opacity: disabled ? 0.6 : 'initial',
        outline: 'none',
        overflow: 'hidden',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all 0.6s ease',
        userSelect: 'none',
        verticalAlign: 'middle',
      }),
      [],
    ),
    btnVariants,
    createStyle(['loading'], ({ loading }) => (loading ? { color: 'transparent' } : '')),
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

interface IProps extends DSProps {
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => any;
  variant?: ButtonVariants | undefined;
  [key: string]: any;
}

function Button({ disabled, children, loading, variant = 'default', ...rest }: IProps) {
  const Touchable = (Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity) as ComponentType;
  return (
    <Touchable>
      <ButtonComponent disabled={disabled} loading={loading} variant={variant} {...rest}>
        <Text>{children}</Text>
      </ButtonComponent>
    </Touchable>
  );
}

Button.defaultProps = {
  disabled: false,
  loading: false,
};

export default Button;
