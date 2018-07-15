const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimize: false
  },

  plugins: [
    new CleanWebpackPlugin(['build/*']),
    new HtmlWebpackPlugin({
      title: 'My Football',
      template: 'src/app/index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],

  module: {
    rules: [
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]' // <-- retain original file name
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                data: '@import "globals.scss";',
                includePaths: [path.resolve(__dirname, './src/app/styles')]
              }
            }
          ]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: 'build'
  }
};
