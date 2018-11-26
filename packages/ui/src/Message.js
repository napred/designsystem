// @flow

import { createComponent, createCssStyle, type StyleFn } from '@napred/ds';
import { css } from 'emotion';

import Flex from './Flex';
import createVariants from './styles/createVariants';

type MessageVariants = 'default' | 'error' | 'warning' | 'success';

// $FlowExpectError
const msgVariants: StyleFn<{ variant?: MessageVariants }> = createVariants('variant', {
  error: (props, { theme }) => css`
    background-color: ${theme.get('color', 'red')};
  `,
  warning: (props, { theme }) => css`
    background-color: ${theme.get('color', 'orange')};
  `,
  success: (props, { theme }) => css`
    background-color: ${theme.get('color', 'green')};
  `,
  default: (props, { theme }) => css`
    background-color: ${theme.get('color', 'blue')};
  `,
});

const Message = createComponent('Message', Flex, {
  styles: [
    createCssStyle(
      ['variant'],
      (props, { theme }) => css`
        background-color: ${theme.get('color', 'blue')};
      `,
      ['variant'],
    ),
    msgVariants,
  ],
});

// $FlowExpectError
Message.defaultProps = {
  borderRadius: 0,
  px: 3,
  py: 2,
  fontWeight: 'bold',
  bgColor: 'blue',
  color: 'white',
};

export default Message;
