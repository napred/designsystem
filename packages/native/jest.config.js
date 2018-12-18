const { resolve } = require('path');

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  displayName: '@napred/native',
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: resolve(__dirname, './tsconfig.json'),
    },
  },
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
    hasteImplModulePath: '<rootDir>/node_modules/react-native/jest/hasteImpl.js',
    providesModuleNodeModules: ['react-native'],
  },
  rootDir: resolve(__dirname, './../../'),
  modulePathIgnorePatterns: [
    resolve(__dirname, './../../node_modules/react-native/Libraries/react-native/'),
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@napred/ds': resolve(__dirname, '../ds/src'),
    '^react$': resolve(__dirname, '../../node_modules/react'),
    '^React$': resolve(__dirname, '../../node_modules/react'),
  },
  testMatch: ['<rootDir>/packages/native/src/**/__tests__/*.(test|spec).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$':
      '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
    '\\.tsx?$': 'ts-jest',
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|react-clone-referenced-element)'],
  setupFiles: ['<rootDir>/node_modules/react-native/jest/setup.js'],
  testEnvironment: 'node',
};
