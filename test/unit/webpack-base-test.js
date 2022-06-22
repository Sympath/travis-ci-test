const assert = require('assert');
// eslint-disable-next-line
describe('webpack.base.js test case', () => {
  // eslint-disable-next-line
  const baseConfig = require('../../lib/webpack.base.js');
  // eslint-disable-next-line
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/wzyan/Documents/selfspace/my-study-repos/webpack-study/build-webpack/test/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/wzyan/Documents/selfspace/my-study-repos/webpack-study/build-webpack/test/template/src/search/index.js');
  });
});
