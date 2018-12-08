import { createComponent } from '@napred/browser';

const Radio = createComponent('Radio', 'input');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Radio.defaultProps = {
  type: 'radio',
};

export default Radio;
