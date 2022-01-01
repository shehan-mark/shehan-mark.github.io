/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: './build',
    devMiddleware: {
      index: true,
      writeToDisk: true,
      // mimeTypes: { phtml: 'text/html' },
      // publicPath: '/publicPathForDevServe',
      // serverSideRender: true,
    },
  },
});