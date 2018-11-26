// @flow

import { createComponent } from '@napred/ds';
import { css } from 'emotion';

const Badge = createComponent('Badge', 'div', {
  style: css`
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
  `,
});

// $FlowExpectError
Badge.defaultProps = {
  borderRadius: 0,
  bgColor: 'blue',
  color: 'white',
  px: 1,
  py: 0,
  m: 0,
};

export default Badge;
