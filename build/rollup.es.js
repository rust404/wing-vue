const scss = require('rollup-plugin-scss')
const VuePlugin = require('rollup-plugin-vue')
const BabelPlugin = require('rollup-plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const baseConfig = require('./rollup.base')

const esConfig = {
  ...baseConfig,
  output: {
    file: './lib/wing.esm.js',
    format: 'es'
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    VuePlugin(baseConfig.plugins.vue),
    BabelPlugin(baseConfig.plugins.babel),
    commonjs(),
    scss({
      output: './lib/wing.css'
    }),
  ]
}

module.exports = esConfig
