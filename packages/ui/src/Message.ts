import { createComponent, css } from '@napred/browser';
import { Flex } from '@napred/primitives';
import createVariants from './styles/createVariants';

type MessageVariants = 'default' | 'error' | 'warning' | 'success';

export const msgVariants = {
  default: (_ :any, { theme } :any) => css`
    background-color: ${theme.color('blue', 'transparent')};
  `,
  error: (_ :any, { theme } :any) => css`
    background-color: ${theme.color('red', 'transparent')};
  `,
  success: (_ :any, { theme } :any) => css`
    background-color: ${theme.color('green', 'transparent')};
  `,
  warning: (_ :any, { theme } :any) => css`
    background-color: ${theme.color('orange', 'transparent')};
  `,
};

const Message = createComponent('Message', Flex, {
  styles: [createVariants<any, { variant?: MessageVariants }>('variant', msgVariants)],
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Message.defaultProps = {
  borderRadius: 0,
  color: 'white',
  fontWeight: 'bold',
  px: 3,
  py: 2,
};

export default Message;
