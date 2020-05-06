const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // entry point into app
  entry: './app/index.js',
  // loaders - to process and import files
  module: {
    rules: [
      {test: /\.svg$/, use: 'svg-inline-loader'},
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {test: /\.(js)$/, use: 'babel-loader'},
    ]
  },
  // the output bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  // allows you to execute certain tasks after the bundle has been created
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
  ],
  // production mode will strip comments and minify js
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}