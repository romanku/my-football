const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    new CleanWebpackPlugin(['build/*.*']),
    new HtmlWebpackPlugin({
      title: 'My Football',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],

  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    contentBase: 'build'
  },
};
