// @flow

import { createComponent } from '@napred/ds';

const Text = createComponent('Text', 'div');

// $FlowExpectError
Text.defaultProps = {
  lineHeight: 1.2,
  m: 0,
  p: 0,
};

export default Text;
