const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
        },
        common: {
          name: 'common',
          test: path.resolve(__dirname, 'src'),
          minChunks: 2,
        },
      },
    },
  },
  output: {
    filename: chunkData => (chunkData.chunk.name === 'main' ? 'application.js' : '[name].js'),
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
});
