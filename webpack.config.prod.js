const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/client/main.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.tmpl.html')
    }),
    new webpack.BannerPlugin('PROD (ヘ･_･)ヘ┳━┳'),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

module.exports = prodConfig
