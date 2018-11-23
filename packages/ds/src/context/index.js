// @flow

import { createContext, type Context } from 'react';
import type { System } from '../system';

export * from './types';

const DesignSystemContext: Context<System> = createContext(({}: any));

export default DesignSystemContext;
