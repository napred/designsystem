import { createComponent } from '@napred/browser';
import Badge from './Badge';

export const style = {
  alignItems: 'center',
  boxAlign: 'center',
  boxSizing: 'border-box',
  textAlign: 'center',
};

const Circle = createComponent('Circle', Badge, {
  style,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Circle.defaultProps = {
  borderRadius: '99999px',
  fontSize: 1,
  height: '24px',
  px: 0,
  py: 1,
  width: '24px',
};

export default Circle;
