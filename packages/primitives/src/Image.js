// @flow

import { createComponent } from '@napred/ds';

const Image = createComponent('Image', 'img', {
  styles: {
    display: 'inline-block',
    maxWidth: '100%',
    height: 'auto',
  },
});

export default Image;
