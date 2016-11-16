var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry, plugins;
if(process.env.NODE_ENV === 'development') {
  entry = {
    'index': ['./frontend/js/index.js','webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8081']
  };
  plugins = [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ];
} else {
  entry = {
    index: './frontend/js/index.js'
  };
  plugins = [
    new ExtractTextPlugin('[name].css'),
  ]
}

 module.exports = {
  entry,
  output: {
    path: __dirname + '/assets/',
    filename: '[name].js',
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        loaders: ['babel-loader']
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins,
};
