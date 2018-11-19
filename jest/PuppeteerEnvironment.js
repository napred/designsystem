// @flow
/* eslint-disable import/no-extraneous-dependencies, node/no-unpublished-require, func-names, no-underscore-dangle */

const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');

    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script /* : Object */) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
