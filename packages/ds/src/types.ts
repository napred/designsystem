import { ISystem } from './system';
import { IThemeSettings } from './theme';

export interface IComponentOptions extends IStylingOptions {
  /** Tell the system to generate (false) or passthrough (true) styles for underlying component */
  passthrough?: boolean;
}

/** Keeps custom styles by component names */
export interface IComponentStylesRegistry {
  [componentName: string]: Array<IStyler<any>>;
}

export interface IStyleCache {
  get<T = any>(name: string): T | void;
  set<T = any>(name: string, value: T): T;
}

export interface IStylingOptions {
  /** Which props should be used for style cache? */
  cacheProps?: string[];
  /** Component's custom styles */
  styles?: Array<IStyler<any>>;
  /** Which props should be stripped from final HTML? */
  stripProps?: string[];
}

export interface IStyler<TProps extends { [key: string]: any }> {
  apply: StylingFn<TProps>;
  propNames: string[];
  stripProps: string[];
}

export type extractStylerProps<Type> = Type extends IStyler<infer x> ? x : object;

export interface IInternalDSProps {
  /** Keep the path in component tree so we can cache styles on leaf level */
  compPath?: string[];
  /** Pass the stripProps so we can strip them on final render to HTML */
  stripProps?: string[];
  /** Pass all the applied stylers down the tree */
  stylers?: Array<IStyler<any>>;
}

export interface IStyleApplicator<TStyleProps extends object = object> {
  apply<TProps extends object = object>(
    componentName: string,
    props: Partial<IInternalDSProps & TStyleProps> & TProps,
    system: ISystem,
    componentOptions: IComponentOptions,
  ): IInternalDSProps & TStyleProps & TProps;
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

export type StyleApplicatorFactory = <TProps extends object = {}>(
  options: {
    cache: IStyleCache;
    cacheKeyFn?: StyleCacheKeyFn;
    componentStyles: IComponentStylesRegistry;
    globalStyles: Array<IStyler<any>>;
  },
) => IStyleApplicator<TProps>;

export type StylerCreatorFn<TProps extends object = {}> = (
  /** Prop names used in style, these props are used for caching too */
  propNames: string[],
  /** Style applied to component */
  style: any,
  /** Strip these on render */
  stripProps?: string[],
) => IStyler<TProps>;

export type StylingFn<TProps extends object> = (props: TProps, designSystem: ISystem) => any;
