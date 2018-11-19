// @flow

export default function omit(
  props: { [key: string]: any },
  blacklist: Array<string>,
): { [key: string]: any } {
  if (blacklist.length === 0) {
    return props;
  }

  const next = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in props) {
    // eslint-disable-next-line no-continue
    if (blacklist.indexOf(key) > -1) continue;

    next[key] = props[key];
  }

  return next;
}
