// @flow

import { css } from 'emotion';
import type { Styler } from './types';
import type { System } from '../context';

export default function applyStyles(
  props: Object,
  styles: Map<string, Styler<any>>,
  system: System,
) {
  const propNames = Object.keys(props);

  return css(
    propNames.reduce((result, propName) => {
      const style = styles.get(propName);

      if (style == null) {
        return result;
      }

      const appliedStyle = style.apply(props, system);

      return [...result, typeof appliedStyle === 'object' ? css(appliedStyle) : appliedStyle];
    }, []),
  );
}
