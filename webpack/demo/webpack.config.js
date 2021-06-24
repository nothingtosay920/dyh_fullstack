'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { EntryOptionPlugin } = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: '[vue-loader]',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        }),
        exclude: /node_modules/
      }
    ]
  },
  plugin: [
    new VueLoaderPlugin(),
    new EntryOptionPlugin('style.css')
  ]
}