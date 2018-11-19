// @flow
/* eslint-disable import/no-extraneous-dependencies, node/no-unpublished-require, func-names, no-underscore-dangle */

const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
  const browser = await puppeteer.launch();
  // store the browser instance so we can teardown it later
  global.__BROWSER__ = browser;
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
