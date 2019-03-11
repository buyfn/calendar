const path = require('path');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
