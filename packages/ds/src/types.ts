import { ISystem } from './system';
import { IThemeSettings } from './theme';

export interface IComponentOptions<TProps extends object, TStyle>
  extends IStylingOptions<TProps, TStyle> {
  /** Tell the system to generate (false) or passthrough (true) styles for underlying component */
  passthrough?: boolean;
}

/** Keeps custom styles by component names */
export interface IComponentStylesRegistry<TStyle> {
  [componentName: string]: Array<IStyler<any, TStyle>>;
}

export interface IStyleCache {
  get<T = any>(name: string): T | void;
  set<T = any>(name: string, value: T): T;
}

export interface IStylingOptions<TProps extends object, TStyle> {
  /** Which props should be used for style cache? */
  cacheProps?: string[];
  /** Component's custom styles */
  styles?: Array<IStyler<TProps, TStyle>>;
  /** Which props should be stripped from final HTML? */
  stripProps?: string[];
}

export interface IStyler<TProps extends object, TStyle = {}> {
  apply: StylingFn<TProps, TStyle>;
  propNames: Array<keyof TProps>;
  stripProps: Array<keyof TProps>;
}

export type extractStylerProps<Type> = Type extends IStyler<infer x, any> ? x : object;

export interface IInternalDSProps<TStyle> {
  /** Keep the path in component tree so we can cache styles on leaf level */
  compPath?: string[];
  /** Pass the stripProps so we can strip them on final render to HTML */
  stripProps?: string[];
  /** Pass all the applied stylers down the tree */
  stylers?: Array<IStyler<any, TStyle>>;
}

export interface IStyleApplicator<TStyleProps extends object, TStyle> {
  apply<TProps extends object>(
    componentName: string,
    props: Partial<IInternalDSProps<TStyle> & TStyleProps> & TProps,
    system: ISystem,
    componentOptions: IComponentOptions<TProps, TStyle>,
  ): IInternalDSProps<TStyle> & TStyleProps & TProps;
}

export interface ITheme {
  /** Returns specific color or color from palette */
  color(
    /** The name of color in palette, if not found, is used unless default value is set and is found */
    valueOrName: string,
    /** Default value or name from palette */
    defaultValueOrName?: string,
  ): string;
  get(attributeName: keyof IThemeSettings, defaultValue?: any): any;
  getResponsiveValue(attributeName: string, viewport: number, defaultValue?: any): any;
}

export type StyleCacheKeyFn = (
  props: object,
  cacheProps: string[],
  viewport: number,
  compPath?: string[],
) => string;

export type StyleApplicatorFactory<TStyle, TProps extends object = {}> = (
  options: {
    cache: IStyleCache;
    cacheKeyFn?: StyleCacheKeyFn;
    componentStyles: IComponentStylesRegistry<TStyle>;
    globalStyles: Array<IStyler<any, TStyle>>;
  },
) => IStyleApplicator<TProps, TStyle>;

export type StylerCreatorFn<TProps extends object, TStyle> = (
  /** Prop names used in style, these props are used for caching too */
  propNames: string[],
  /** Style applied to component */
  style: TStyle | StylingFn<TProps, TStyle>,
  /** Strip these on render */
  stripProps?: string[],
) => IStyler<TProps, TStyle>;

export type StylingFn<TProps extends object, TStyle> = (
  props: TProps,
  designSystem: ISystem,
) => TStyle;
