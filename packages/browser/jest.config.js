const { resolve } = require('path');

module.exports = {
  displayName: '@napred/browser',
  rootDir: __dirname,
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  moduleNameMapper: {
    '@napred/ds': resolve(__dirname, '../ds/src'),
    '^react$': resolve(__dirname, '../../node_modules/react'),
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/__tests__/*.(test|spec).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
