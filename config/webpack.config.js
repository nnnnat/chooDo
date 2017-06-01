var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssnext = require('postcss-cssnext')

var path = require('path')

module.exports = {
  entry: './src/base.js',
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  resolve: { extensions: ['.js'] },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader?interpolate' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: 'es2015' } },
      { test: /\.css/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]!postcss-loader' }) },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/html/base.html' }),
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ cssnext({ browsers: 'IE 11' }) ] } })
  ]
}
