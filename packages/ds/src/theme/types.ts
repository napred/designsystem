export interface IFontPalette {
  default: string;
  [extra: string]: string;
}

export interface IThemeSettings {
  borderRadiuses: Array<string | number>;
  breakpoints: string[];
  colors: { [name: string]: string };
  containerSizes: Array<number | string>;
  fontFamilies?: IFontPalette;
  fontSizes: number[];
  gutters: number[];
  importFonts?: string[];
  spacing: number[];
  [key: string]: any;
}
