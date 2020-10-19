const esConfig = require('./rollup.es')
const umdConfig = require('./rollup.umd')
// const iifeConfig = require('./rollup.iife')
const packagesConfig = require('./rollup.packages')

const all = [esConfig, umdConfig, ...packagesConfig]

module.exports = all
