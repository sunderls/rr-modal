const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
          'node_modules',
          './src'
      ]
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [['latest', {"modules": false}],'react'],
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?modules!postcss-loader'
        })
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin({
        filename: 'main.css',
        allChunks: true
    }),
  ],
};
