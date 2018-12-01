import { IStyler, StylingFn } from '@napred/ds';
import { Interpolation } from 'emotion';

interface IVariantsStylerOptions {
  /** Specifies which props are used for caching */
  cacheProps?: string[];
  defaultVariant?: string;
  /** Specifies which props are stripped from HTML */
  stripProps?: string[];
}

export default function createVariants<TProps extends object, TVariantProps = { variant: string }>(
  propName: keyof TVariantProps,
  variants: { [variant: string]: Interpolation | StylingFn<TProps & TVariantProps> },
  { cacheProps = [], defaultVariant = 'default', stripProps = [] }: IVariantsStylerOptions = {},
): IStyler<TProps & TVariantProps> {
  return {
    apply: (props, system) => {
      const styler = variants[propName as string] || variants[defaultVariant];

      if (styler == null) {
        return;
      }

      if (typeof styler === 'function') {
        return (styler as StylingFn<TProps & TVariantProps>)(props, system);
      }

      return styler;
    },
    propNames: [propName as string, ...cacheProps],
    stripProps: [propName as string, ...stripProps],
  };
}
