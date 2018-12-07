module.exports = {
  displayName: '@napred/ds',
  rootDir: './../..',
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  collectCoverageFrom: ['packages/**/src/**/*.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@napred/ds': '<rootDir>/packages/ds/src',
    '@napred/primitives': '<rootDir>/packages/primitives/src',
    '@napred/ui': '<rootDir>/packages/ui/src',
    '\\.svg': '<rootDir>/jest/transformSvg.js',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/packages/ds/**/__tests__/*.(test|spec).{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.jsx?$': './jest/transformJs.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
