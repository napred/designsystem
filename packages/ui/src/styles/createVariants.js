// @flow

import { css } from 'emotion';
import type { System, Styler } from '@napred/ds';

export default function createVariantStyle<TProps>(
  propName: string,
  cases: { [case: string]: [
    propNames: Array<string>,
    style: string | Object | ((props: TProps, system: System) => string),
    stripProps?: Array<string>
   ] }
): Styler<TProps> {
  return {
    apply: (props: TProps, system: System) => {
      if (typeof style === 'string' || typeof style === 'object') {
        return css(style);
      }

      return style(props, system);
    },
    propNames,
    stripProps: stripProps || propNames,
  };
}

export default function createVariants(propName: string, cases: { [case: string]: any }) {
  return (props: any) => createCssStyle(...(cases[props[propName]] || cases.default || ''));
}
