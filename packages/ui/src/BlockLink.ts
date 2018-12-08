import { createComponent } from '@napred/browser';
import { Link } from '@napred/primitives';

const BlockLink = createComponent('BlockLink', Link);

// temporary fix because if we use defaultProps in config object
// it will require them :(
BlockLink.defaultProps = {
  display: 'block',
};

export default BlockLink;
