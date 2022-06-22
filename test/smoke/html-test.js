const glob = require('glob-all');
// eslint-disable-next-line
describe('Checking generated html files', () => {
  // eslint-disable-next-line
  it('should generate html files', (done) => {
    const files = glob.sync([
      './dist/index.html',
      './dist/search.html',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});
