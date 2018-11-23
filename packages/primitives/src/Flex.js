// @flow

import { createComponent } from '@napred/ds';

const Flex = createComponent('Flex', 'div');

// $FlowExpectError
Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
