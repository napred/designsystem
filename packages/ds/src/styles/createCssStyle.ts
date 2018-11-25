import { css, Interpolation } from 'emotion';
import { ISystem } from '../system';
import { IStyler } from './types';

export default function createCssStyle<TProps extends object>(
  propNames: string[],
  style: Interpolation | ((props: TProps, system: ISystem) => Interpolation),
  stripProps?: string[],
): IStyler<TProps> {
  return {
    apply: (props: TProps, system: ISystem) => {
      if (style == null) {
        return style;
      }

      if (typeof style === 'function') {
        return (style as any)(props, system);
      }

      return css(style);
    },
    propNames,
    stripProps: stripProps || propNames,
  };
}
