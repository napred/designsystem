import { createComponent } from '@napred/ds';

const Divider = createComponent('Divider', 'hr', {
  style: {
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    display: 'block',
  },
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Divider.defaultProps = {
  borderColor: 'greyLight',
  borderStyle: 'solid',
  minHeight: '2px',
  mx: 0,
  my: 3,
};

export default Divider;
