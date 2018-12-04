import { createComponent } from '@napred/ds';

const Title = createComponent('Title', 'h1');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Title.defaultProps = {
  fontWeight: 'bold',
  lineHeight: 1.3,
  m: 0,
};

export default Title;
