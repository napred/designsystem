import { createComponent } from '@napred/native';
import { View } from 'react-native';

const Card = createComponent('Card', View);
const CardFooter = createComponent('CardFooter', View);
const CardHeader = createComponent('CardHeader', View);

export { Card, CardFooter, CardHeader };
