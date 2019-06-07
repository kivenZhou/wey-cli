const path = require('path')
const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = merge(webpackBase, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'static/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new optimizeCss()
  ],
  optimization: {
    providedExports: true,
    minimize: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'all',
      name: true,
      minChunks: 1,
      minSize: 30000,
      cacheGroups: {
        vendors: {
          test: "/[\\\\/]node_modules[\\\\/]/",
          name: 'vendors',
          chunks: 'all'
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          priority: -10,
          enforce: true
        }
      }
    },
    runtimeChunk: 'single'
  }
})