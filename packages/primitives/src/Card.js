// @flow

import { createComponent } from '@napred/ds';

const Card = createComponent('Card', 'div');
export const CardHeader = createComponent('CardHeader', 'div');
export const CardFooter = createComponent('CardFooter', 'div');

// $FlowExpectError
Card.defaultProps = {
  flexDirection: 'column',
};

// $FlowExpectError
CardHeader.defaultProps = {
  flex: 1,
};

// $FlowExpectError
CardFooter.defaultProps = {
  flex: 1,
};

export default Card;
