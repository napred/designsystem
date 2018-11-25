import { Interpolation } from 'emotion';
import { Component, createElement, FunctionComponent } from 'react';
import { useStyle } from './hooks';
import { createCssStyle, IStyler, IStylerProps } from './styles';
import { cleanProps } from './utilities';

export interface IDSProps extends IStylerProps {
  /**
   * Can be used to override underlying element (if DSComponent is passed, it will be extended by it's styles)
   */
  as?: string | FunctionComponent<any> | Component<any> | IDSComponent<any>;
}

/** Component's options */
interface IOptions<TProps extends object> {
  /** Which props should be used for style cache? */
  cacheProps?: string[];
  /** Component's default props */
  defaultProps?: Partial<TProps & IDSProps & { [key: string]: any }>;
  /** Which props should be stripped from final HTML? */
  stripProps?: string[];
  /** Component's style */
  style?: Interpolation | ((props: TProps) => string);
  /** Component's custom styles */
  styles?: Array<IStyler<any>>;
}

export interface IDSComponent<TProps extends object> extends FunctionComponent<TProps> {
  /** Specifies that component is DS component */
  $$nprdds: boolean;
}

/** Creates DS component */
export default function createComponent<TProps extends object>(
  /**
   * Name of the component, should be unique
   * Name is used to apply custom styles from DesignSystem componentStyles registry
   */
  componentName: string,
  /**
   * Underlying component that is being rendered
   */
  component: string | FunctionComponent<TProps> | Component<TProps> | IDSComponent<TProps>,
  /**
   * Optional component's options
   */
  { cacheProps = [], defaultProps, stripProps = [], style, styles }: IOptions<TProps> = {},
): IDSComponent<TProps & IDSProps & { [key: string]: any }> {
  const opts = {
    cacheProps,
    stripProps,
    styles: [] as Array<IStyler<any>>,
  };

  // convert style to styler
  if (style) {
    opts.styles = [createCssStyle(cacheProps || [], style, stripProps), ...(styles || [])];
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

  if (defaultProps) {
    factory.defaultProps = defaultProps;
  }

  return factory;
}
