import { createComponent } from '@napred/native';
import { TouchableWithoutFeedback } from 'react-native';

const Link = createComponent('Link', TouchableWithoutFeedback);

Link.defaultProps = {
  accessibilityRole: 'link',
};

export { Link };
