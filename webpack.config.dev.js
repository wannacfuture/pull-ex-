const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode: 'development',
  devtool: 'eval',
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
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
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
    new webpack.BannerPlugin('Copyright Flying Unicorns inc.'),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

module.exports = devConfig
