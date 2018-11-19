// @flow

import type { StyleFn } from '../types';

function compose(...styles: Array<StyleFn<*>>): () => Array<StyleFn<*>> {
  // this is only passthrough function to make flow compose component props types from styles
  return () => styles;
}

const composeStyles: $Compose = (compose: any);

export default composeStyles;
