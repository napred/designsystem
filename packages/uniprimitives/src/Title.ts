import { createComponent } from '@napred/native';
import { Text } from 'react-native';

const Title = createComponent('Title', Text);

// @ts-ignore - ignore heading role error
Title.defaultProps = {
  accessibilityRole: 'heading',
  'aria-level': 1, // h1
  fontWeight: 'bold',
  lineHeight: 1.3,
  m: 0,
};

export { Title };
