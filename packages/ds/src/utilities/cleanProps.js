// @flow

export default function cleanProps(props: Object, blacklist: Array<string>): Object {
  return Object.keys(props).reduce((result, propName) => {
    if (blacklist.includes(propName)) {
      return result;
    }

    return { ...result, [propName]: props[propName] };
  }, {});
}
