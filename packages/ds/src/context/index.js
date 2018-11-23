// @flow

import { createContext, type Context } from 'react';
import type { SystemAPI } from '../system';

export type { SystemAPI };

const DesignSystemContext: Context<SystemAPI> = createContext(({}: any));

export default DesignSystemContext;
