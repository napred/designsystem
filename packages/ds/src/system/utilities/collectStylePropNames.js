// @flow

import type { StyleFn } from '../types';

export default function collectStylePropNames(styles: Array<StyleFn<any>>): Array<string> {
  return [].concat(...styles.map(style => style.propNames));
}
