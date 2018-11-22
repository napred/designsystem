// @flow

import { css } from 'emotion';
import useDesignSystem from './useDesignSystem';

export default function useStyle(
  componentName: string,
  style: string | Object | Function,
  props: Object,
  extendingClassNames?: string = '',
): string {
  const ds = useDesignSystem();
  const systemClassName = ds.applyStyles(componentName, props);

  let className = '';

  if (typeof style === 'function') {
    className = style(props);
  } else if (style != null) {
    className = css(style);
  }

  return `${extendingClassNames} ${systemClassName} ${className}`.trim();
}
