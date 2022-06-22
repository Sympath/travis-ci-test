
const path = require('path');
process.chdir(path.join(__dirname, 'template'));
// eslint-disable-next-line
describe('builder-webpack test case', () => {
  // eslint-disable-next-line
  require('./unit/webpack-base-test');
});
