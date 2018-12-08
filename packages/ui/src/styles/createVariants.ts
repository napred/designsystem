import { IStyler, StylingFn } from '@napred/browser';
import { Interpolation } from 'emotion';

interface IVariantsStylerOptions {
  /** Specifies which props are used for caching */
  cacheProps?: string[];
  defaultVariant?: string;
  /** Specifies which props are stripped from HTML */
  stripProps?: string[];
}

export default function createVariants<
  TProps extends { [key: string]: any },
  TVariantProps = { variant: string }
>(
  propName: keyof TVariantProps,
  variants: { [variant: string]: Interpolation | StylingFn<TProps & TVariantProps> },
  { cacheProps = [], defaultVariant = 'default', stripProps = [] }: IVariantsStylerOptions = {},
): IStyler<TProps & TVariantProps> {
  return {
    apply: (props, system) => {
      const variant = props[propName as string] || defaultVariant;
      const styler = variants[variant];

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
