require('react-testing-library/cleanup-after-each');
require('expect-puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });
