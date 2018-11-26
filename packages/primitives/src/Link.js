// @flow

import { createComponent } from '@napred/ds';

const Link = createComponent('Link', 'a', {
  style: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
});

// $FlowExpectError
Link.defaultProps = {
  color: 'grey',
};

export default Link;
