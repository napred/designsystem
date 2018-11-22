module.exports = {
  preset: 'jest-puppeteer',
  setupTestFrameworkScriptFile: './jest/setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion/serializer'],
  collectCoverageFrom: ['packages/**/src/**/*.{js,jsx}'],
  transform: {
    '^.+\\.jsx?$': './jest/transformJs.js',
  },
};
