import { IStyler, StyleDefinition, StylingFn } from '@napred/browser';

interface IVariantsStylerOptions<TProps extends object> {
  /** Specifies which props are used for caching */
  cacheProps?: Array<keyof TProps>;
  defaultVariant?: string;
  /** Specifies which props are stripped from HTML */
  stripProps?: Array<keyof TProps>;
}

export default function createVariants<TProps extends object, TVariantProps = { variant: string }>(
  propName: keyof TVariantProps,
  variants: {
    [variant: string]: StyleDefinition | StylingFn<TProps & TVariantProps, StyleDefinition>;
  },
  {
    cacheProps = [],
    defaultVariant = 'default',
    stripProps = [],
  }: IVariantsStylerOptions<TProps & TVariantProps> = {},
): IStyler<TProps & TVariantProps, StyleDefinition> {
  return {
    apply: (props, system) => {
      const variant = props[propName] || defaultVariant;
      const styler = variants[variant as string];

      if (styler == null) {
        return '';
      }

      if (typeof styler === 'function') {
        return (styler as StylingFn<TProps & TVariantProps, StyleDefinition>)(props, system);
      }

      return styler;
    },
    propNames: [propName, ...cacheProps],
    stripProps: [propName, ...stripProps],
  };
}
