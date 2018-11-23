// @flow

export default function createNullCache() {
  return {
    get: () => undefined,
    set: (name, value) => value,
  };
}
