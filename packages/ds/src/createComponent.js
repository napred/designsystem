// @flow

import { createElement, type ComponentType, type StatelessFunctionalComponent } from 'react';
import { useStyle } from './hooks';
import { cleanProps } from './utilities';

type Props = {
  as?: string | ComponentType<*>,
  className?: string,
};

export default function createComponent<TProps: *>(
  componentName: string,
  component: string | ComponentType<TProps>,
  defaultStyle?: string | Object | Function,
  defaultProps?: Object,
): StatelessFunctionalComponent<TProps> {
  const factory = ({ as = component, className, ...restProps }: Props) => {
    const clsName = useStyle(componentName, defaultStyle, restProps, className);

    return createElement(as, {
      className: clsName,
      ...(typeof as === 'string' ? cleanProps(restProps) : restProps),
    });
  };

  factory.displayName = componentName;

  if (defaultProps) {
    factory.defaultProps = defaultProps;
  }

  return factory;
}
