// @flow

import type { StyleCache } from './types';

export default function createNullCache(): StyleCache {
  return {
    get: () => undefined,
    set: (name, value) => value,
  };
}
