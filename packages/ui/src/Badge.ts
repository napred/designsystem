import { createComponent, css } from '@napred/browser';

const Badge = createComponent('Badge', 'div', {
  style: css`
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
  `,
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
