import { createComponent } from '@napred/ds';

const Checkbox = createComponent('Checkbox', 'input');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Checkbox.defaultProps = {
  type: 'checkbox',
};

export default Checkbox;
