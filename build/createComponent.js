const components = require('../src/components.json')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const {parse} = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default
const t = require('@babel/types');


const componentConfig = {
  name: 'Message',
  version: '0.0.1',
  chnName: '',
  category: '0'
}

run()

function transformEntry(config) {
  const entry = path.resolve(__dirname, '../src/wing.js')
  const code = fs.readFileSync(entry).toString()
  const ast = parse(code, {
    sourceType: 'module'
  });
  traverse(ast, {
    VariableDeclaration(p) {
      const x = parse(`import ${config.name} from './packages/${config.name.toLowerCase()}';`, {
        sourceType: 'module'
      })
      if (p.node && p.node.declarations && p.node.declarations[0]
        && p.node.declarations[0].id && p.node.declarations[0].id.name === 'components') {
        p.insertBefore(x.program.body[0])
        p.node.declarations[0].init.elements.push(t.identifier(config.name))
      }
    }
  })
  const output = generate(ast, { /* options */}, code);
  fs.writeFileSync(entry, output.code)
}

function run() {
  let componentName = ''
  getConfig().then(config => {
    componentName = config.name
    return createComponentFiles(config)
  }).then((config) => {
    transformEntry(config)
    return addComponentToJSON(config)
  }).catch((err) => {
    console.log(err)
    removeComponentDir(componentName)
    removeComponentFromJSON(componentName)
  })
}

function isDuplicate(name) {
  return components.packages.filter(pkg => pkg.name.toLowerCase() === name.toLowerCase()).length !== 0
}

function getConfig() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称（请使用驼峰命名，如ButtonGroup）：',
      validate(answer) {
        if (!answer) {
          return '组件名不能为空'
        }
        if (answer[0] !== answer[0].toUpperCase()) {
          return '请使用驼峰命名（首字母大写）'
        }
        if (isDuplicate(answer)) {
          return '与已有组件名重复'
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'chnName',
      message: '请输入组件中文名称：',
      validate(answer) {
        if (!answer) {
          return '中文名不能为空'
        }
        if (!/^[\u4e00-\u9fa5]+$/.test(answer)) {
          return '只能包含中文字符'
        }
        return true
      }
    },
    {
      type: 'list',
      name: 'category',
      message: '请输入组件分类：',
      choices: components.categories,
      filter(answer) {
        return components.categories.indexOf(answer) + ''
      }
    }
  ]).then((answer) => {
    return {
      version: '0.0.1',
      ...answer
    }
  })
}

function addComponentToJSON(config) {
  components.packages.push(config)
  return createFile(path.resolve(__dirname, '../src/components.json'), JSON.stringify(components, null, 2)).then(() => {
    console.log(`增添组件${config.name}信息至components.json成功`)
  })
}

function removeComponentFromJSON(name) {
  const components = require(path.resolve(__dirname, '../src/components.json'))
  components.packages = components.packages.filter(pkg => pkg.name.toLowerCase() !== name.toLowerCase())
  createFile(path.resolve(__dirname, '../src/components.json'), JSON.stringify(components, null, 2)).then(() => {
    console.log(`从components.json删除组件${name}成功`)
  })
}

function removeComponentDir(name) {
  console.log('删除相关文件中')
  name = name.toLowerCase()
  const dirPath = path.resolve(__dirname, `../src/packages/${name}`)
  if (fs.existsSync(dirPath)) {
    fs.rmdirSync(dirPath, {
      recursive: true
    })
  }
}

function createComponentFiles(config) {
  return Promise.all([
    createIndexFile(config),
    createScssFile(config),
    createVueFile(config),
    createTestFile(config)
  ]).then(() => {
    return config
  })
}

function createFile(filePath, content) {
  return new Promise((resolve, reject) => {
    const dirPath = path.dirname(filePath)
    // create directory recursively
    if (!fs.existsSync(dirPath)) {
      const arr = []
      let tempPath = path.dirname(filePath)
      while (tempPath && !fs.existsSync(tempPath)) {
        const pathArr = tempPath.split(path.sep)
        arr.push(pathArr.pop())
        tempPath = pathArr.join(path.sep)
      }
      while (arr.length !== 0) {
        tempPath += '/' + arr.pop()
        fs.mkdirSync(tempPath)
      }
    }
    fs.writeFile(filePath, content, err => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

function createVueFile(config) {
  const name = config.name.toLowerCase()
  const filePath = path.resolve(__dirname, `../src/packages/${name}/${name}.vue`)
  const template = `<template>
</template>

<script>
export default {
  name: 'w-${name}'
}
</script>
  `
  return createFile(filePath, template).then(() => {
    console.log(`创建组件${name}.vue文件成功`)
  })
}

function createScssFile(config) {
  const name = config.name.toLowerCase()
  const filePath = path.resolve(__dirname, `../src/packages/${name}/${name}.scss`)
  return createFile(filePath, '').then(() => {
    console.log(`创建组件${name}.scss成功`)
  })
}

function createIndexFile(config) {
  const name = config.name.toLowerCase()
  const filePath = path.resolve(__dirname, `../src/packages/${name}/index.js`)
  const template = `import ${config.name} from "./${name}.vue";
import './${name}.scss';

${config.name}.install = function(Vue) {
  Vue.component(${config.name}.name, ${config.name})
}
export default ${config.name};
  `
  return createFile(filePath, template).then(() => {
    console.log(`创建组件index.js成功`)
  })
}

function createTestFile(config) {
  const name = config.name.toLowerCase()
  const filePath = path.resolve(__dirname, `../src/packages/${name}/__test__/${name}.spec.js`)
  const template = `import { shallowMount } from '@vue/test-utils'
import ${config.name} from '../${name}.vue'

describe('${config.name} component', () => {
})
  `
  return createFile(filePath, template).then(() => {
    console.log(`创建组件测试文件${name}.spec.js成功`)
  })
}
