const path = require('path')
const {merge} = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig,{
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: 'wing',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "this"
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
    minimizer: [new TerserPlugin()],
  }
})
