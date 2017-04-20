var webpack = require('webpack');
var path = require('path');

var config = {
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
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
