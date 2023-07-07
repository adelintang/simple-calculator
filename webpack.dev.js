const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
})