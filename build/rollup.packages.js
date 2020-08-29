const scss = require('rollup-plugin-scss')
const VuePlugin = require('rollup-plugin-vue')
const BabelPlugin = require('rollup-plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const replace = require('@rollup/plugin-replace')
const baseConfig = require('./rollup.base')

const buildConfigs = []

const {packages} = require('../src/components.json')
const entry = {}
if (packages) {
  packages.forEach(pkg => {
    const name = pkg.name.toLowerCase()
    entry[name] = `./src/packages/${name}/index.js`
  })
}

Object.entries(entry).forEach(([name, path]) => {
  const pkgConfig = {
    ...baseConfig,
    input: path,
    output: {
      file: `./lib/packages/${name}.js`,
      format: 'umd',
      name,
      globals: baseConfig.globals
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      replace(baseConfig.plugins.replace),
      VuePlugin({
        ...baseConfig.plugins.vue,
        optimizeSSR: true
      }),
      BabelPlugin(baseConfig.plugins.babel),
      commonjs(),
      scss({
        output: `./lib/packages/${name}.css`
      }),
    ]
  }
  buildConfigs.push(pkgConfig)
})

module.exports = buildConfigs
