'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'build'),
  entry: './main',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.css/, loader: 'style!css?resolve url'},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')},
      {test: /\.jade$/, loader: 'jade'},
      {test: /\.(gif|png|jpg|svg|ttf|eot|woff|woff2)/, loader: 'file?name=[name].[ext]?[hash]'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {allChunks: true}),
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ],

  devServer: {
    contentBase: __dirname
  }
};