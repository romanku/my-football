const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    new CleanWebpackPlugin(['build/*.*']),
    new HtmlWebpackPlugin({
      title: 'My title',
      template: 'src/index.html'
    })
  ],

  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    contentBase: 'build'
  },
};
