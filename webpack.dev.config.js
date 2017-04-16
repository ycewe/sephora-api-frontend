var webpack = require('webpack');
var path = require('path');

var config = {
  output: {
    filename: 'main.js',
    sourceMapFilename: 'main.js.map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
          {
            presets: ['es2015', 'stage-0', 'react']
          }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = config;
