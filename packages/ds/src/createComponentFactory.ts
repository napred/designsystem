import { createElement, FunctionComponent } from 'react';
import { useStyle } from './hooks';
import { StylerProps } from './styles';
import { ComponentFactory, IDSComponent, StylerCreatorFn } from './types';
import { cleanProps } from './utilities';

export interface ICreateComponentFactoryOptions<TStyle> {
  /** Styler creator that will be used to convert options.style to styler */
  createStyle: StylerCreatorFn<any, TStyle>;
}

/** Create DS component factory */
export default function createComponentFactory<
  /** Available global style props for a component */
  TStyleProps extends object = StylerProps,
  /** Allowed style definition types */
  TStyle = {},
  TPropsDefault extends object = {},
  TAsPropsDefault extends object = {}
>({
  createStyle,
}: ICreateComponentFactoryOptions<TStyle>): ComponentFactory<
  TStyleProps,
  TStyle,
  TPropsDefault,
  TAsPropsDefault
> {
  return function createComponent(componentName, component, options = {}) {
    const { cacheProps = [], stripProps = [], style, styles = [] } = options;
    const opts = {
      cacheProps,
      stripProps,
      styles,
    };

    // convert style to styler
    if (style) {
      opts.styles = [createStyle(cacheProps, style, stripProps), ...styles];
    }

    // collect cacheProps and stripProps from styles
    if (styles) {
      styles.forEach(styler => {
        opts.cacheProps.push(...(styler.propNames as string[]));
        opts.stripProps.push(...(styler.stripProps as string[]));
      });
    }

    const factory = ({ as = component, ...restProps }) => {
      const isDsComp = typeof as !== 'string' && (as as IDSComponent<any>).$$nprdds;
      const props = useStyle(componentName, restProps as any, {
        ...opts,
        passthrough: isDsComp,
      });

      return createElement(as as FunctionComponent<any>, {
        // if is ds component, pass all props through
        // otherwise clean props
        ...(isDsComp ? props : cleanProps(props, props.stripProps)),
      });
    };

    factory.displayName = componentName;
    factory.$$nprdds = true;

    return factory;
  };
}
