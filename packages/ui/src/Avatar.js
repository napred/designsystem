// @flow

import { createComponent } from '@napred/ds';
import { Image } from '@napred/primitives';

const Avatar = createComponent('Avatar', Image, {
  style: {
    display: 'inline-block',
    borderRadius: '99999px',
    objectFit: 'contain',
  },
  defaultProps: {
    flexShrink: 0,
    height: 48,
    width: 48,
  },
});

export default Avatar;
