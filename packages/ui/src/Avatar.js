// @flow

import { createComponent } from '@napred/ds';

const Avatar = createComponent('Avatar', 'img', {
  style: {
    display: 'inline-block',
    borderRadius: '99999px',
    objectFit: 'contain',
  },
});

// $FlowExpectError
Avatar.defaultProps = {
  flexShrink: 0,
  height: 48,
  width: 48,
};

export default Avatar;
