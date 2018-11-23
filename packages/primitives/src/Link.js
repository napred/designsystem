// @flow

import { createComponent } from '@napred/ds';

const Link = createComponent('Link', 'a', {
  styles: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
});

// $FlowExpectError
Link.defaultProps = {
  color: 'grey',
};

Link.displayName = 'Link';

export default Link;
