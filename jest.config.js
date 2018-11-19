module.exports = {
  setupTestFrameworkScriptFile: './jest/setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globalSetup: './jest/setupTests.js',
  globalTeardown: './jest/teardownTests.js',
  testEnvironment: './jest/PuppeteerEnvironment.js',
  collectCoverageFrom: ['packages/**/src/**/*.{js,jsx}'],
  transform: {
    '^.+\\.jsx?$': './jest/transformJs.js',
  },
};
