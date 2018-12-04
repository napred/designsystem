import { createComponent } from '@napred/ds';

const Flex = createComponent('Flex', 'div');

// temporary fix because if we use defaultProps in config object
// it will require them :(
Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
