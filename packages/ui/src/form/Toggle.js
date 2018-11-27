// @flow

import { css } from 'emotion';
import { createCssStyle, createComponent } from '@napred/ds';

const Toggle = createComponent('Toggle', 'div', {
  styles: [
    createCssStyle(
      ['disabled', 'height', 'checked', 'borderWidth'],
      ({ disabled, height, checked, borderWidth }, { theme }) => css`
      cursor: pointer;
      display: inline-flex;
      background-color: ${checked ? theme.get('color', 'primary') : theme.get('color', 'greyLight')}
      transition-property: background-color;
      transition-duration: .2s;
      transition-timing-function: ease-out;
      user-select: none;
      ${disabled &&
        css`
          cursor: not-allowed;
          filter: grayscale(10%);
          opacity: 0.6;
        `}
      &::after {
        content: " ";
        width: ${`calc(${height}px - ${4 * borderWidth}px)`};
        height: ${`calc(${height}px - ${4 * borderWidth}px)`};
        border-radius: 16px;
        margin: ${`${2 * borderWidth}px`};
        background-color: ${theme.get('color', 'white')};
        transition-property: transform, color;
        transition-duration: .1s;
        transition-timing-function: ease-out;
        transform: ${checked ? 'translateX(16px)' : 'translateX(0)'};
      }
      &:focus: {
        outline: 0;
      }
  `,
      ['height', 'borderWidth'],
    ),
  ],
  defaultProps: {
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'transparent',
    borderColor: 'grey',
    height: 24,
    role: 'checkbox',
    width: 40,
    disabled: false,
  },
});

export default Toggle;
