const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    // filename: "[name]-[chunkhash:10].js"
    filename: "[name].bundle.js"
  },
  devtool: 'source-map',
  watch: false
});