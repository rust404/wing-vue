const scss = require('rollup-plugin-scss')
const VuePlugin = require('rollup-plugin-vue')
const BabelPlugin = require('rollup-plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const baseConfig = require('./rollup.base')

const umdConfig = {
  ...baseConfig,
  output: {
    file: './lib/wing.umd.js',
    format: 'umd',
    name: 'wing',
    globals: baseConfig.output.globals,
    exports: 'named'
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    VuePlugin({
      ...baseConfig.plugins.vue,
      optimizeSSR: true
    }),
    BabelPlugin(baseConfig.plugins.babel),
    commonjs(),
    scss({
      output: './lib/wing.css'
    }),
  ]
}

module.exports = umdConfig
