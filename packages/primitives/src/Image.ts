import { createComponent } from '@napred/ds';

const Image = createComponent('Image', 'img');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Image.defaultProps = {
  display: 'inline-block',
  height: 'auto',
  maxWidth: '100%',
};

export default Image;
