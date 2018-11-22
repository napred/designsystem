// @flow

import { createContext } from 'react';
import createSystem from './createSystem';

export { createSystem };
export * from './types';

const DesignSystemContext = createContext(createSystem());

export default DesignSystemContext;
