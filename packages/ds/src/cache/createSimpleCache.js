// @flow

import type { StyleCache } from './types';

export default function createSimpleCache(): StyleCache {
  const recs = {};

  return {
    get(name: string) {
      return recs[name];
    },
    set(name, value) {
      recs[name] = value;

      return value;
    },
  };
}
