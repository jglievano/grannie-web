const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: './app/index.tsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: 'index.html',
      template: './app/index.html'
    }),

    new TypedCssModulesPlugin({
      globPattern: './app/**/*.css'
    }),

    new webpack.NamedModulesPlugin()
  ]
};
