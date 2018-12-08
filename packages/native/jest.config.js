const { resolve } = require('path');

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  displayName: '@napred/native',
  globals: {
    'ts-jest': {
      // babelConfig: require('./babel.config'),
      diagnostics: true,
    },
  },
  preset: 'react-native',
  rootDir: __dirname,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@napred/ds': resolve(__dirname, '../ds/src'),
    '^react$': resolve(__dirname, '../../node_modules/react'),
    '^React$': resolve(__dirname, '../../node_modules/react'),
    '\\.svg': '<rootDir>/jest/transformSvg.js',
  },
  testMatch: ['<rootDir>/**/__tests__/*.(test|spec).{js,jsx,ts,tsx}'],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
};
