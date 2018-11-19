// @flow

type FontPalette = {
  default: string,
  [extra: string]: string,
};

type ThemeSettings = {
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

export default class Theme {
  borderRadiuses: Array<string | number>;
  breakpoints: Array<string>;
  colors: { [name: string]: string };
  containerSizes: Array<number | string>;
  fontFamilies: FontPalette;
  fontSizes: Array<number>;
  gutters: Array<number>;
  importFonts: Array<string>;
  spacing: Array<number>;

  constructor(settings: ThemeSettings) {
    this.borderRadiuses = settings.borderRadiuses;
    this.breakpoints = settings.breakpoints;
    this.colors = settings.colors;
    this.containerSizes = settings.containerSizes;
    this.fontFamilies = settings.fontFamilies || {
      default: 'inherit', // inherit browser defaults
    };
    this.fontSizes = settings.fontSizes;
    this.gutters = settings.gutters;
    this.importFonts = settings.importFonts || [];
    this.spacing = settings.spacing;
  }

  color(name: string, defaultColor?: string): string {
    return (
      this.colors[name] ||
      (defaultColor ? this.colors[defaultColor] || defaultColor : this.colors.grey)
    );
  }

  containerSize(breakpoint: number): string | number {
    return this.containerSizes[breakpoint] || '100%';
  }

  get(attributeName: string): Array<string | number> | { [key: string]: string | number } {
    // $FlowExpectError
    const attributeValues = this[attributeName];

    if (attributeValues == null) {
      throw new Error(`There is no ${attributeName} defined in theme`);
    }

    return attributeValues;
  }

  gutter(breakpoint: number): number {
    return this.gutters[breakpoint] || 0;
  }

  mediaQueries(): Array<string> {
    return this.breakpoints;
  }

  space(scale: number): number {
    if (typeof this.spacing === 'number') {
      return this.spacing;
    }
    console.log('bla');
    return typeof this.spacing[scale] !== 'undefined'
      ? this.spacing[scale]
      : this.spacing[this.spacing.length - 1];
  }

  fontFamily(variant: string): string {
    return this.fontFamilies[variant] || this.fontFamilies.default;
  }

  fontSize(scale: number): number {
    if (typeof this.fontSizes === 'number') {
      return this.fontSizes;
    }
    return typeof this.fontSizes[scale] !== 'undefined'
      ? this.fontSizes[scale]
      : this.fontSizes[this.fontSizes.length - 1];
  }

  fonts(): string {
    const imports = this.importFonts.join(';');

    if (imports !== '') {
      return `${imports};`;
    }

    return '';
  }
}
