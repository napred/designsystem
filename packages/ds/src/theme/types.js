// @flow

export type FontPalette = {
  default: string,
  [extra: string]: string,
};

export type ThemeSettings = {
  borderRadiuses: Array<string | number>,
  breakpoints: Array<string>,
  colors: { [name: string]: string },
  containerSizes: Array<number | string>,
  fontFamilies?: FontPalette,
  fontSizes: Array<number>,
  gutters: Array<number>,
  importFonts?: Array<string>,
  spacing: Array<number>,
};

export type Theme = {
  get(attributeName: string): any,
};
