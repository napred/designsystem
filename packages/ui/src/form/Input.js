// @flow

import { css } from 'emotion';
import { createComponent, createCssStyle } from '@napred/ds';

const Input = createComponent('Input', 'input', {
  styles: [
    createCssStyle(
      [],
      (props, { theme }) => css`
        transition: all 0.3s ease;

        &:focus {
          outline: 0;
          border-color: ${theme.get('colors', 'primary')};
        }
      `,
    ),
  ],
});

Input.displayName = 'Input';
// $FlowExpectError
Input.defaultProps = {
  borderColor: 'greyLight',
  borderStyle: 'solid',
  borderRadius: 0,
  borderWidth: 1,
  p: 2,
  m: 0,
};

export default Input;
