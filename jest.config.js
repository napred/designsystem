module.exports = {
  /* globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  preset: 'jest-puppeteer',
  setupTestFrameworkScriptFile: './jest/setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],*/
  // collectCoverageFrom: ['packages/**/src/**/*.{js,jsx,ts,tsx}'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  /* moduleNameMapper: {
    '@napred/ds': '<rootDir>/packages/ds/src',
    '@napred/primitives': '<rootDir>/packages/primitives/src',
    '@napred/ui': '<rootDir>/packages/ui/src',
    '\\.svg': '<rootDir>/jest/transformSvg.js',
  },*/
  projects: ['<rootDir>/packages/*'],
  /* testEnvironment: 'jsdom',
  testRegex: '(/test/(?!test-utils\b)\b.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  transform: {
    '^.+\\.jsx?$': './jest/transformJs.js',
    '^.+\\.tsx?$': 'ts-jest',
  },*/
};
