var webpack = require('webpack');
var path = require('path');



module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style!css!sass' },
      { test: /\.svg$/, loader: 'svg-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/app'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app',
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ]
};
