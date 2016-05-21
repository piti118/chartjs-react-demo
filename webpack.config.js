const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const development = env === 'development';

module.exports = {
  devtool: development ? 'cheap-module-eval-source-map' : 'source-map',
  context: __dirname,
  entry: [
    './index.jsx',
  ],
  output: {
    path: __dirname, // eslint-disable-line
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: true }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      },
    ],
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
}
