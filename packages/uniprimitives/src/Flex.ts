import { createComponent } from '@napred/native';
import { View } from 'react-native';

const Flex = createComponent('Flex', View);

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
};

export { Flex };
