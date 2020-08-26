const path = require('path')
const {merge} = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/wing.js'),
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  devtool: 'inline-cheap-module-source-map',
  externals: [nodeExternals()],
  optimization: {
    minimize: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
})
