// @flow

import { createComponent } from '@napred/ds';

const Checkbox = createComponent('Checkbox', 'input');

// $FlowExpectError
Checkbox.defaultProps = {
  type: 'checkbox',
};

export default Checkbox;
