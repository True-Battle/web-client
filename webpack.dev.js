const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js"
  },
  devtool: 'cheap-module-inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
});