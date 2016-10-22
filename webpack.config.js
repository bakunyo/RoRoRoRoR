const path    = require('path');
const webpack = require('webpack');

const dist = path.join(__dirname, 'public/dist');

module.exports = {
  entry: './frontend/js/article.js',
  output: {
    path: dist,
    filename: 'article.js',
    publicPath: 'http://localhost:4000/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  devServer: {
    contentBase: 'public/dist',
    port: 4000
  }
}
