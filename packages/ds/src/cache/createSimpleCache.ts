import { IStyleCache } from './types';

/** Simple cache */
export default function createSimpleCache(): IStyleCache {
  const recs: { [key: string]: any } = {};

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
