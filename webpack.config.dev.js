const webpack = require('webpack')
const path = require('path')

const devConfig = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    './src/client/main.js'
  ],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: '/dist/',
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
    new webpack.NamedModulesPlugin(), // to make it easier to see which dependencies are being patched
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

module.exports = devConfig
