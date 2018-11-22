// @flow

import isPropValid from '@emotion/is-prop-valid';

export default function cleanProps(props: Object): Object {
  return Object.keys(props).reduce((result, propName) => {
    if (isPropValid(propName)) {
      return { ...result, [propName]: props[propName] };
    }

    return result;
  }, {});
}
