import { createComponent } from '@napred/browser';

const Absolute = createComponent('Absolute', 'div');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Absolute.defaultProps = { m: 0, position: 'absolute' };

export default Absolute;
