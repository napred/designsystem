module.exports = {
  // hack because jest does not support global* in project configs
  // https://github.com/facebook/jest/issues/5441
  globalSetup: '<rootDir>/node_modules/jest-environment-puppeteer/setup',
  globalTeardown: '<rootDir>/node_modules/jest-environment-puppeteer/teardown',
  projects: [
    '<rootDir>/packages/browser/jest.config.js',
    '<rootDir>/packages/ds/jest.config.js',
    '<rootDir>/packages/native/jest.config.js',
    '<rootDir>/packages/primitives/jest.config.js',
    '<rootDir>/packages/ui/jest.config.js',
    '<rootDir>/packages/uniprimitives/jest.config.js',
    '<rootDir>/packages/uniui/jest.config.js',
  ],
};
