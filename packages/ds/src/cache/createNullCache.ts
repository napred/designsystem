import { IStyleCache } from './types';

/** Simple cache that doesn't cache at all */
export default function createNullCache(): IStyleCache {
  return {
    get: () => undefined,
    set: (_, value) => value,
  };
}
