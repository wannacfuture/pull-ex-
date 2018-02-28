const webpack = require('webpack')
const path = require('path')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/client/main.js'],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

module.exports = prodConfig
