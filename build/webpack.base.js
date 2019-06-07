const path = require('path')
const utils = require('util')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    index: './src/page/index.js'
  },
  output: {
    filename: 'static/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFormatter,
            }
          }
        ]
        
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true,
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/jpeg',
            name: 'static/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'static/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'static/[id].[hash].css'
    }),
    new htmlWebpackPlugin({
      template: './template/index.html'
    })
  ]
}
