// @flow

import type { Styler } from '../styles';
import useDesignSystem from './useDesignSystem';

export default function useStyle(
  componentName: string,
  props: Object,
  options: {
    cacheProps?: Array<string>,
    styles?: Array<Styler<any>>,
    stripProps?: Array<string>,
  },
): Object {
  const ds = useDesignSystem();

  return ds.applyStyles(componentName, props, options);
}
