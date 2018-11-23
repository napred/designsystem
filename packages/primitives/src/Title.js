// @flow

import { createComponent } from '@napred/ds';

const Title = createComponent('Title', 'h1');

// $FlowExpectError
Title.defaultProps = {
  fontWeight: 'bold',
  lineHeight: 1.3,
  m: 0,
};

export default Title;
