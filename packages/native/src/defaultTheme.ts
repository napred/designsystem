import { createTheme, defaultTheme, IFontPalette } from '@napred/ds';

const fontFamilies: IFontPalette = defaultTheme.get('fontFamilies');

const theme = createTheme({
  borderRadiuses: defaultTheme.get('borderRadiuses'),
  breakpoints: defaultTheme.get('breakpoints'),
  colors: defaultTheme.get('colors'),
  containerSizes: defaultTheme.get('containerSizes'),
  fontFamilies: Object.keys(fontFamilies).reduce(
    (families, key) => {
      const [font] = fontFamilies[key].split(',');

      // if the value contains, we will take first font family
      // because react native does not support fallbacks
      return {
        ...families,
        [key]: font,
      };
    },
    {} as any,
  ),
  fontSizes: defaultTheme.get('fontSizes'),
  gutters: defaultTheme.get('gutters'),
  // importFonts: defaultTheme.get('importFonts'),
  lineHeight: '150%',
  spacing: defaultTheme.get('spacing'),
});

export default theme;
