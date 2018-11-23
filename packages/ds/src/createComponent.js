// @flow

import { createElement, type Component, type StatelessFunctionalComponent } from 'react';
import { createCssStyle, type Styler } from './styles';
import { useStyle } from './hooks';
import { cleanProps } from './utilities';

type Props = {
  as?: any,
};

type Options<TProps: *> = {
  cacheProps?: Array<string>,
  defaultProps?: $Shape<TProps>,
  stripProps?: Array<string>,
  style?: string | Object | ((props: TProps) => string),
  styles?: Array<Styler<any>>,
};

export default function createComponent<TProps: *>(
  componentName: string,
  component: string | StatelessFunctionalComponent<TProps> | Component<TProps>,
  options?: Options<TProps> = {},
): StatelessFunctionalComponent<TProps> {
  // now create styles
  const opts = {
    ...options,
  };

  // convert style to styler
  if (options.style) {
    opts.styles = [
      createCssStyle(options.cacheProps || [], options.style, options.stripProps),
      ...(options.styles || []),
    ];
  }

  // collect cacheProps and stripProps from styles
  if (options.styles) {
    opts.cacheProps = options.cacheProps || [];
    opts.stripProps = options.stripProps || [];
    opts.styles.forEach(styler => {
      opts.cacheProps.push(...styler.propNames);
      opts.stripProps.push(...styler.stripProps);
    });
  }

  const factory = ({ as = component, ...restProps }: Props) => {
    const isDsComp = typeof as !== 'string' && as.$$nprdds;
    const props = useStyle(componentName, restProps, {
      ...opts,
      passthrough: isDsComp,
    });

    return createElement(as, {
      // if is ds component, pass all props through
      // otherwise clean props
      ...(isDsComp ? props : cleanProps(props, props.stripProps)),
    });
  };

  factory.displayName = componentName;
  factory.$$nprdds = true;

  if (options.defaultProps) {
    factory.defaultProps = options.defaultProps;
  }

  return factory;
}
