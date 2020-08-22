const path = require('path')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig,{
  mode: 'production',
  // TODO
  entry: {
    button: '../src/package/Button/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: 'wing',
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
  }
})
