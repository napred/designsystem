// @flow

import { createComponent } from '@napred/ds';
import Absolute from './Absolute';

const Popover = createComponent('Popover', Absolute, {
  style: {
    outline: 'none',
  },
});

// $FlowExpectError
Popover.defaultProps = {
  overflowX: 'hidden',
  overflowY: 'auto',
};

export default Popover;
