import { createComponent } from '@napred/ds';

const Link = createComponent('Link', 'a', {
  defaultProps: {
    color: 'grey',
  },
  style: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
});

export default Link;
