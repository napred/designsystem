// @flow

import { createComponent } from '@napred/ds';

const Divider = createComponent('Divider', 'hr', {
  style: {
    display: 'block',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
  },
});

// $FlowExpectError
Divider.defaultProps = {
  borderColor: 'greyLight',
  borderStyle: 'solid',
  minHeight: '2px',
  mx: 0,
  my: 3,
};

export default Divider;
