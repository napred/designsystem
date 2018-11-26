// @flow

import { createComponent } from '@napred/ds';

const Radio = createComponent('Radio', 'input');

// $FlowExpectError
Radio.defaultProps = {
  type: 'radio',
};

export default Radio;
