// @flow

import useDesignSystem from './useDesignSystem';

export default function useStyle(
  componentName: string,
  props: Object,
  options: {
    cacheProps?: Array<string>,
    styles?: Array<Styler>,
    stripProps?: Array<string>,
  },
): string {
  const ds = useDesignSystem();

  return ds.applyStyles(componentName, props, options);
}
