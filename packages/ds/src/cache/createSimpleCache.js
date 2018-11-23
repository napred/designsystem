// @flow

export default function createSimpleCache() {
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
