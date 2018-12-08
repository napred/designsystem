import { IStyler, StylingFn } from '@napred/ds';

export default function createStyle<TProps extends object>(
  propNames: string[],
  style: string | { [key: string]: any } | StylingFn<TProps>,
  stripProps?: string[],
): IStyler<TProps> {
  return {
    apply: (props, system) => {
      const appliedStyle =
        typeof style === 'function' ? (style as StylingFn<TProps>)(props, system) : style;

      if (typeof appliedStyle === 'string') {
        return style;
      } else if (
        typeof appliedStyle === 'object' &&
        appliedStyle != null &&
        !Array.isArray(appliedStyle)
      ) {
        return style;
      }

      throw new Error(
        `Invalid applied style type, ${typeof appliedStyle}, only css string or css object are allowed`,
      );
    },
    propNames,
    stripProps: stripProps || propNames,
  };
}
