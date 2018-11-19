// @flow
/* eslint-disable import/no-extraneous-dependencies, node/no-unpublished-require, func-names, no-underscore-dangle */

const rimraf = require('rimraf');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
  await global.__BROWSER__.close();
  rimraf.sync(DIR);
};
