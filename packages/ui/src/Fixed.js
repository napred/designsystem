// @flow

import { createComponent } from '@napred/ds';

const Fixed = createComponent('Fixed', 'div');

// $FlowExpectError
Fixed.defaultProps = {
  position: 'fixed',
};

export default Fixed;
