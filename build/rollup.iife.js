const scss = require('rollup-plugin-scss')
const VuePlugin = require('rollup-plugin-vue')
const BabelPlugin = require('rollup-plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const replace = require('@rollup/plugin-replace')
const {terser} = require('rollup-plugin-terser')
const baseConfig = require('./rollup.base')


const unpkgConfig = {
  ...baseConfig,
  output: {
    file: './lib/wing.min.js',
    format: 'iife',
    name: 'wing',
    globals: baseConfig.output.globals,
    exports: 'named'
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    replace(baseConfig.plugins.replace),
    VuePlugin(baseConfig.plugins.vue),
    BabelPlugin(baseConfig.plugins.babel),
    terser({
      output: {
        ecma: 5
      }
    }),
    commonjs(),
    scss({
      output: './lib/wing.css'
    }),
  ]
}

module.exports = unpkgConfig
