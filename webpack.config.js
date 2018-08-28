const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  mode: 'development',
  // overrides default of current working drive
  context: APP_DIR,

  entry: [`${APP_DIR}/index.jsx`],

  // accurate source map that supports minimizing, though slow
  devtool: 'inline-source-map',

  watch: true,

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'assets/images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.hbs' }),
    new CleanWebpackPlugin(BUILD_DIR),
  ],
  resolve: {
    modules: [
      // doesn't seem to work
      'client/src',
      // works fine
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.css', '.scss', '.sass'],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
};
