const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = JSON.parse(readFileSync(resolve(__dirname, './.storybook/.babelrc'), 'utf8'));
