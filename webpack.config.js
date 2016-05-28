'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'build'),
  entry: './main',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')},
      {test: /\.jade$/, loader: 'jade'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {allChunks: true})
  ],
  devServer: {
    contentBase: __dirname
  }
};