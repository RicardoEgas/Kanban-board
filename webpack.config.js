const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Dogs Rescue',
      filename: 'index.html',
    }),
    new NodePolyfillPlugin(),
  ],
  output: {
    clean: true,
    publicPath: './',
    assetModuleFilename: '[name][ext]',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      child_process: false,
      fs: false,
      os: false,
      path: false,
    },
  },

};