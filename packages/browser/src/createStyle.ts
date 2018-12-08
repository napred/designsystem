import { IStyler, StylingFn } from '@napred/ds';
import { css, Interpolation } from 'emotion';

export default function createStyle<TProps extends object>(
  propNames: string[],
  style: Interpolation | StylingFn<TProps>,
  stripProps?: string[],
): IStyler<TProps> {
  return {
    apply: (props, system) => {
      if (style == null) {
        return style;
      }

      if (typeof style === 'function') {
        return (style as StylingFn<TProps>)(props, system);
      }

      return css(style);
    },
    propNames,
    stripProps: stripProps || propNames,
  };
}
