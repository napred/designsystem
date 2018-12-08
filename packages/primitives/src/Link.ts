import { createComponent } from '@napred/browser';

const Link = createComponent('Link', 'a', {
  style: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
});

// temporary fix because if we use defaultProps in config object
// it will require them :(
Link.defaultProps = {
  color: 'grey',
};

export default Link;
