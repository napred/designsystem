// @flow

import { createComponent } from '@napred/ds';

const Box = createComponent('Box', 'div');

// $FlowExpectError
Box.defaultProps = {
  p: 3,
};

export default Box;
