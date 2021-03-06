const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname + 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 9000,
    stats: "minimal"
  }
});