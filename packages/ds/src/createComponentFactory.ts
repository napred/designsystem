import { ComponentType, createElement, FunctionComponent } from 'react';
import { useStyle } from './hooks';
import { StylerProps } from './styles';
import { IStylingOptions, StylerCreatorFn, StylingFn } from './types';
import { cleanProps } from './utilities';

export interface IDSProps {
  /**
   * Can be used to override underlying element (if DSComponent is passed, it will be extended by it's styles)
   */
  as?: string | ComponentType<any> | IDSComponent<any>;
} /*  & StylerProps; */

/** Component's options */
export interface IComponentFactoryOptions<TProps extends object, TStyle>
  extends IStylingOptions<TProps, TStyle> {
  /** Component's style */
  style?: TStyle | StylingFn<TProps, TStyle>;
}

export interface IDSComponent<TProps extends object> extends FunctionComponent<TProps> {
  /** Specifies that component is DS component */
  $$nprdds: boolean;
}

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
>({ createStyle }: ICreateComponentFactoryOptions<TStyle>) {
  return function createComponent<
    TProps extends object = TPropsDefault,
    TAsProps extends object = TAsPropsDefault
  >(
    /**
     * Name of the component, should be unique
     * Name is used to apply custom styles from DesignSystem componentStyles registry
     */
    componentName: string,
    /**
     * Underlying component that is being rendered
     */
    component: string | ComponentType<TAsProps> | IDSComponent<TAsProps>,
    /**
     * Optional component's options
     */
    {
      cacheProps = [],
      stripProps = [],
      style,
      styles = [],
    }: IComponentFactoryOptions<
      TProps & TAsProps & IDSProps & TStyleProps & { [key: string]: any },
      TStyle
    > = {},
  ): IDSComponent<TProps & TAsProps & IDSProps & TStyleProps & { [key: string]: any }> {
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
      const props = useStyle(componentName, restProps as TProps & TStyleProps & TAsProps, {
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
