const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});
// 切换目录至template内
process.chdir(path.join(__dirname, '../template'));
// 先删除dist目录
rimraf('./dist', () => {
  // eslint-disable-next-line
  const prodConfig = require('../../lib/webpack.prod.js');
  // 执行webpack配置
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));

    console.log('Webpack build success, begin run test.');

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
