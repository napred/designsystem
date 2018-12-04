import { createComponent } from '@napred/ds';

const Text = createComponent('Text', 'div');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Text.defaultProps = {
  lineHeight: 1.2,
  m: 0,
  p: 0,
};

export default Text;
