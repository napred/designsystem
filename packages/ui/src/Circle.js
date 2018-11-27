// @flow

import { css } from 'emotion';
import { createComponent } from '@napred/ds';
import Badge from './Badge';

const Circle = createComponent('Circle', Badge, {
  style: css`
    border-radius: 99999px;
    align-items: center;
    text-align: center;
    -webkit-box-align: center;
    box-sizing: border-box;
  `,
  defaultProps: {
    width: '24px',
    height: '24px',
    px: 0,
    py: 1,
    fontSize: 1,
  },
});

export default Circle;
