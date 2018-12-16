module.exports = {
  displayName: '@napred/uniprimitives',
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  rootDir: __dirname,
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  setupFiles: ['<rootDir>/node_modules/react-native-web/jest/setup.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@napred/ds': '<rootDir>/../ds/src',
    '@napred/native': '<rootDir>/../native/src',
    '@napred/uniprimitives': '<rootDir>/src',
    '^react$': '<rootDir>/node_modules/react',
    '^react-dom$': '<rootDir>/node_modules/react-dom',
    '^react-native$': '<rootDir>/node_modules/react-native-web/dist/cjs',
  },
  testEnvironment: 'jest-environment-puppeteer',
  testMatch: ['<rootDir>/**/__tests__/*.(test|spec).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
