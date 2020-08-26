const path = require('path')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig,{
  mode: 'production',
  // TODO
  entry: {
    button: path.resolve(__dirname, '../src/packages/button/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib/packages'),
    filename: '[name]/index.js',
    library: '[name]',
    libraryTarget: 'commonjs2',
  },
  externals: {
    vue: {
      amd: 'vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      root: 'Vue'
    }
  },
  optimization: {
    minimize: false
  },
  plugins: [
    // 打包组件css
    new MiniCssExtractPlugin({
      filename: '[name]/style.css'
    })
  ]
})
