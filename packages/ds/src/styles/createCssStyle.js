// @flow

import type { System } from '../context';
import type { Styler } from './types';

export default function createCssStyle<TProps>(
  propNames: Array<string>,
  style: string | ((props: TProps, system: System) => string),
): Styler<TProps> {
  return {
    apply: (props: TProps, system: System) => {
      if (typeof style === 'string') {
        return style;
      }

      return style(props, system);
    },
    propNames,
  };
}
