import { createComponent, css } from '@napred/browser';
import Badge from './Badge';

const Circle = createComponent('Circle', Badge, {
  style: css`
    align-items: center;
    text-align: center;
    -webkit-box-align: center;
    box-sizing: border-box;
  `,
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
