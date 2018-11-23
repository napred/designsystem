// @flow

import { createElement, type ComponentType, type StatelessFunctionalComponent } from 'react';
import { useStyle } from './hooks';
import { cleanProps } from './utilities';

type Props = {
  as?: string | ComponentType<*>,
};

type Options<TProps: *> = {
  cacheProps?: Array<string>,
  defaultProps?: $Shape<TProps>,
  stripProps?: Array<string>,
  style?: string | Object | ((props: TProps) => string),
};

export default function createComponent<TProps: *>(
  componentName: string,
  component: string | ComponentType<TProps>,
  options?: Options = {},
): StatelessFunctionalComponent<TProps> {
  const factory = ({ as = component, ...restProps }: Props) => {
    const [styleProps, stripProps] = useStyle(componentName, restProps, options);

    return createElement(as, {
      ...(typeof as === 'string'
        ? cleanProps(styleProps, stripProps)
        : { ...styleProps, stripProps }),
    });
  };

  factory.displayName = componentName;

  if (options.defaultProps) {
    factory.defaultProps = options.defaultProps;
  }

  return factory;
}
