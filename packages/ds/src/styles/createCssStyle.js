// @flow

import { css } from 'emotion';
import type { System } from '../context';
import type { Styler } from './types';

export default function createCssStyle<TProps>(
  propNames: Array<string>,
  style: string | Object | ((props: TProps, system: System) => string),
): Styler<TProps> {
  return {
    apply: (props: TProps, system: System) => {
      if (typeof style === 'string' || typeof style === 'object') {
        return css(style);
      }

      return style(props, system);
    },
    propNames,
    stripProps: propNames,
  };
}
