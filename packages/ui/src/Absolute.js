// @flow

import { createComponent } from '@napred/ds';

const Absolute = createComponent('Absolute', 'div');

// $FlowExpectError
Absolute.defaultProps = { m: 0, position: 'absolute' };

export default Absolute;
