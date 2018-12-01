import { createComponent } from '@napred/ds';

const Box = createComponent('Box', 'div');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Box.defaultProps = {
  p: 3,
};

export default Box;
