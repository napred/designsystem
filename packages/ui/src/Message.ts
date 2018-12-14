import { createComponent, css } from '@napred/browser';
import { Flex } from '@napred/primitives';
import createVariants from './styles/createVariants';

type MessageVariants = 'default' | 'error' | 'warning' | 'success';

export const msgVariants = createVariants<any, { variant?: MessageVariants }>('variant', {
  default: (_, { theme }) => css`
    background-color: ${theme.color('blue', 'transparent')};
  `,
  error: (_, { theme }) => css`
    background-color: ${theme.color('red', 'transparent')};
  `,
  success: (_, { theme }) => css`
    background-color: ${theme.color('green', 'transparent')};
  `,
  warning: (_, { theme }) => css`
    background-color: ${theme.color('orange', 'transparent')};
  `,
});

const Message = createComponent('Message', Flex, {
  styles: [msgVariants],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Message.defaultProps = {
  bgColor: 'blue',
  borderRadius: 0,
  color: 'white',
  fontWeight: 'bold',
  px: 3,
  py: 2,
};

export default Message;
