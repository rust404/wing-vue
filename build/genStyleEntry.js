const path = require('path')
const {createFile} = require('./util')

const packages = require(path.resolve(__dirname, '../src/components.json')).packages

const getPackageStyleEntry = (name) => {
  name = name.toLowerCase()
  return `@import '../src/packages/${name}/${name}.scss';`
}

const content = packages.reduce((acc, item) => {
  acc += getPackageStyleEntry(item.name) + '\n'
  return acc
}, '')

createFile(path.resolve('./lib/wing.scss'), content).then(() => {
  console.log('样式入口文件创建成功')
})
