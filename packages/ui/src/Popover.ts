import { createComponent } from '@napred/ds';
import Absolute from './Absolute';

const Popover = createComponent('Popover', Absolute, {
  style: {
    outline: 'none',
  },
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Popover.defaultProps = {
  overflowX: 'hidden',
  overflowY: 'auto',
};

export default Popover;
