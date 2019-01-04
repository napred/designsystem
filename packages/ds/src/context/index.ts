import { createContext } from 'react';
import { SystemAPI } from '../system';

export { SystemAPI };

const DesignSystemContext = createContext<SystemAPI<any>>({} as any);

export default DesignSystemContext;
