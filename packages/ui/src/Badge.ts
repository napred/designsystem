import { createComponent } from '@napred/browser';

export const style = {
  display: 'inline-block',
  fontSmoothing: 'antialiased',
  verticalAlign: 'middle',
};

const Badge = createComponent('Badge', 'div', {
  style,
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Badge.defaultProps = {
  bgColor: 'blue',
  borderRadius: 0,
  color: 'white',
  m: 0,
  px: 1,
  py: 0,
};

export default Badge;
