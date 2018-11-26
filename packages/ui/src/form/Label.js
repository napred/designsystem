// @flow

import { createComponent } from '@napred/ds';

const Label = createComponent('Label', 'label');

// $FlowExpectError
Label.defaultProps = {
  display: 'flex',
  fontWeight: 600,
};

export default Label;
