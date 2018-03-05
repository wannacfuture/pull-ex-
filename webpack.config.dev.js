const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    './src/client/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    pathinfo: true // Include comments with information about the modules.
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.tmpl.html')
    }),
    new webpack.BannerPlugin('DEV (╯°□°）╯︵ ┻━┻'),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

module.exports = devConfig
