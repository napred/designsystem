// @flow

import Theme from './theme';

// mobile first layout
// base font size is assumed to be 16px so we can calculate em using division
const MOBILE_BP = `only screen`; // 40em
const TABLET_BP = `screen and (min-width: ${641 / 16}em)`; // 40.0625em
const DESKTOP_BP = `screen and (min-width: ${1025 / 16}em)`; // 64.036em
const L_DESKTOP_BP = `screen and (min-width: ${1280 / 16}em)`; // 80.000em
const XL_DESKTOP_BP = `screen and (min-width: ${1441 / 16}em)`; // 90.036em
const XXL_DESKTOP_BP = `screen and (min-width: ${1921 / 16}em)`; // 120.063em

export const colors = {
  lightBlue: '#4B6EB9',
  blue: '#3B5998',
  greyDarkest: '#303030',
  greyDark: '#4A4A4A',
  grey: '#A8A8A8',
  greyLight: '#E7E7E7',
  greyLighter: '#F7F7F7',
  greyLightest: '#FFFFFF',
  green: '#3CD048',
  greenDarker: '#54BC5D',
  orange: '#FD7400',
  pinkDark: '#AA2554',
  primary: '#D03C70',
  primaryLight: '#FA4B88',
  red: '#EA2E49',
  turqoiseDark: '#197187',
  turqoise: '#1E839D',
  turqoiseLight: '#26A8C9',
  twitterLight: '#1B95E0',
  twitter: '#1B95E0',
  yellow: '#FFE11A',
  white: '#FFFFFF',
  lightTransparent: 'rgba(255,255,255, 0.9)',
  lighterTransparent: 'rgba(255,255,255, 0.8)',
};

export default new Theme({
  borderRadiuses: ['5px', '15px', '30px', '99999px'],
  breakpoints: [MOBILE_BP, TABLET_BP, DESKTOP_BP, L_DESKTOP_BP, XL_DESKTOP_BP, XXL_DESKTOP_BP],
  colors,
  containerSizes: ['100%', '100%', '968px', '1240px', '1400px'],
  fontFamilies: {
    default: '"Palanquin", "Helvetica", sans-serif',
  },
  fontSizes: [16, 20, 24, 32, 48, 64, 72],
  gutters: [12, 12, 12],
  importFonts: [
    "@import url('https://fonts.googleapis.com/css?family=Palanquin:400,500,600&subset=latin-ext')",
  ],
  spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512],
});
