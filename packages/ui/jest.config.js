module.exports = {
  displayName: '@napred/ui',
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  rootDir: __dirname,
  setupTestFrameworkScriptFile: '<rootDir>/../../jest/setup.js',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@napred/ds': '<rootDir>/../ds/src',
    '@napred/primitives': '<rootDir>/../primitives/src',
    '@napred/ui': '<rootDir>/src',
    '\\.svg': '<rootDir>/../../jest/transformSvg.js',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/__tests__/*.(test|spec).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
