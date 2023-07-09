const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({
    filename: 'main.[contenthash].css'
  })],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    clean: true
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
})