if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/ds.production.min.js');
} else {
  module.exports = require('./cjs/ds.development.js');
}
