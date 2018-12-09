import { IStyler, StylingFn } from '@napred/ds';
import { css } from 'emotion';
import { StyleDefinition } from './types';

export default function createStyle<TProps extends object>(
  propNames: Array<keyof TProps>,
  style: StyleDefinition | StylingFn<TProps, StyleDefinition>,
  stripProps?: Array<keyof TProps>,
): IStyler<TProps, StyleDefinition> {
  return {
    apply: (props, system) => {
      return css(typeof style === 'function' ? style(props, system) : style);
    },
    propNames,
    stripProps: stripProps || propNames,
  };
}
