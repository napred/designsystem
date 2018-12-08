import { Interpolation } from 'emotion';
import { ComponentType, createElement, FunctionComponent } from 'react';
import { useStyle } from './hooks';
import { StylerProps } from './styles';
import { IStylingOptions, StylerCreatorFn, StylingFn } from './types';
import { cleanProps } from './utilities';

export type DSProps = {
  /**
   * Can be used to override underlying element (if DSComponent is passed, it will be extended by it's styles)
   */
  as?: string | ComponentType<any> | IDSComponent<any>;
} & StylerProps;

/** Component's options */
export interface IComponentFactoryOptions<TProps extends object> extends IStylingOptions {
  /** Component's style */
  style?: Interpolation | StylingFn<TProps>;
}

export interface IDSComponent<TProps extends object> extends FunctionComponent<TProps> {
  /** Specifies that component is DS component */
  $$nprdds: boolean;
}

export interface ICreateComponentFactoryOptions {
  /** Styler creator that will be used to convert options.style to styler */
  createStyle: StylerCreatorFn;
}

/** Create DS component factory */
export default function createComponentFactory<
  TPropsDefault extends object = {},
  TAsPropsDefault extends object = {}
>({ createStyle }: ICreateComponentFactoryOptions) {
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
    }: IComponentFactoryOptions<TProps & TAsProps & DSProps & { [key: string]: any }> = {},
  ): IDSComponent<TProps & TAsProps & DSProps & { [key: string]: any }> {
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
        opts.cacheProps.push(...styler.propNames);
        opts.stripProps.push(...styler.stripProps);
      });
    }

    const factory = ({ as = component, ...restProps }) => {
      const isDsComp = typeof as !== 'string' && (as as IDSComponent<any>).$$nprdds;
      const props = useStyle(componentName, restProps, {
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
