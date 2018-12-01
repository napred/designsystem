import { createComponent } from '@napred/ds';

const Label = createComponent('Label', 'label');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Label.defaultProps = {
  display: 'flex',
  fontWeight: 600,
};

export default Label;
