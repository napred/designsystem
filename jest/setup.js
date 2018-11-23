// @flow
/* eslint-disable import/no-extraneous-dependencies, node/no-unpublished-require */

import 'react-testing-library/cleanup-after-each';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

const Adapter = require('enzyme-adapter-react-16');
const { configure } = require('enzyme');
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

jest.setTimeout(30 * 1000);

configure({ adapter: new Adapter() });

const customConfig = { threshold: 0 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
  failureThreshold: 0.1,
  failureThresholdType: 'percent',
  noColors: true,
});

expect.extend({ toMatchImageSnapshot });

expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className) {
      return className;
    },
  }),
);
