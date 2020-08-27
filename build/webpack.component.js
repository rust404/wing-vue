const path = require('path')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {packages} = require(path.resolve(__dirname, '../src/components.json'))

const entry = {}
if (packages) {
  packages.forEach(pkg => {
    const name = pkg.name.toLowerCase()
    entry[name] = path.resolve(__dirname, `../src/packages/${name}`)
  })
}

module.exports = merge(baseConfig, {
  mode: 'production',
  entry,
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
