// @flow

import useDesignSystem from './useDesignSystem';

export default function useStyle(
  componentName: string,
  props: Object,
  options: {
    cacheProps?: Array<string>,
    style?: string | Object | ((props: Object) => any),
  },
): string {
  const ds = useDesignSystem();

  return ds.applyStyles(componentName, props, options);
}
