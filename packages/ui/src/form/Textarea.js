// @flow

import { css } from 'emotion';
import { createCssStyle, createComponent } from '@napred/ds';

const Textarea = createComponent('Textarea', 'textarea', {
  styles: [
    createCssStyle(
      [],
      (props, { theme }) => css`
        transition: all 0.3s ease;
        font-family: inherit;
        appearance: none;

        &:focus {
          outline: 0;
          border-color: ${theme.get('color', 'primary')};
        }
        &:disabled {
          opacity: 1/4;
        }
      `,
    ),
  ],
});

// $FlowExpectError
Textarea.defaultProps = {
  borderColor: 'greyLight',
  borderStyle: 'solid',
  borderRadius: 0,
  borderWidth: 1,
  p: 2,
  my: 0,
};

export default Textarea;
