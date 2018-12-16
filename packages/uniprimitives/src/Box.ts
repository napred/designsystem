import { createComponent } from '@napred/native';
import { View } from 'react-native';

const Box = createComponent('Box', View);

Box.defaultProps = {
  p: 3,
};

export { Box };
