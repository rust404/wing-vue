const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const {isDev}  = require('./util')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // 统一引入公共scss文件
              additionalData: `@import "~@/styles/index.scss"; `,
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                sass: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
              },
            },
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
  ]
}
