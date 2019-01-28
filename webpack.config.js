const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /htaccess/,
        loader: 'file-loader',
        options: {
          name: '.[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '/src/index.html'),
      favicon: path.join(__dirname, '/src/favicon.png'),
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
};

module.exports = (env, options) => {
  if (options.mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }

  return config;
};
