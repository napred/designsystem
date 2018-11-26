// @flow

import { createComponent } from '@napred/ds';

import Link from './Link';

const BlockLink = createComponent('BlockLink', Link);

// $FlowExpectError
BlockLink.defaultProps = {
  display: 'block',
};

export default BlockLink;
