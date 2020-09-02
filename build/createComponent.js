const components = require('../src/components.json')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const {parse} = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default
const t = require('@babel/types');


// const componentConfig = {
//   name: 'Message',
//   version: '0.0.1',
//   chnName: '',
//   category: '0'
// }

run()
// removeComponent({name: 'Test'})

function addEntry(config) {
  const entry = path.resolve(__dirname, '../src/wing.js')
  const code = fs.readFileSync(entry).toString()
  const ast = parse(code, {
    sourceType: 'module'
  });
  const componentName = 'W' + config.name
  traverse(ast, {
    ArrayExpression(p) {
      const parent = p.findParent(parent => parent.isVariableDeclaration())
      if (parent && parent.getBindingIdentifiers().components) {
        const x = parse(`import ${componentName} from './packages/${config.name.toLowerCase()}';`, {
          sourceType: 'module'
        })
        parent.insertBefore(x.program.body[0])
        p.node.elements.push(t.identifier(componentName))
      }
    },
    ExportDeclaration(p) {
      const exportIdentifier = t.identifier(componentName)
      const specifier = t.exportSpecifier(exportIdentifier, exportIdentifier)
      p.node.specifiers.push(specifier)
    }
  })
  const output = generate(ast, { /* options */}, code);
  fs.writeFileSync(entry, output.code)
}

function removeEntry(config) {
  const entry = path.resolve(__dirname, '../src/wing.js')
  const code = fs.readFileSync(entry).toString()
  const ast = parse(code, {
    sourceType: 'module'
  });
  const componentName = 'W' + config.name
  traverse(ast, {
    Identifier(p) {
      if (p.isIdentifier({name: componentName})) {
        const importDeclaration = p.findParent(parent => parent.isImportDeclaration())
        const exportSpecifier = p.findParent(parent => parent.isExportSpecifier())
        const arrayExpression = p.findParent(parent => parent.isArrayExpression())
        arrayExpression && p.remove()
        importDeclaration && importDeclaration.remove()
        exportSpecifier && exportSpecifier.remove()
      }
    }
  })
  const output = generate(ast, { /* options */}, code);
  fs.writeFileSync(entry, output.code)
}

function run() {
  let outerConfig = null
  getConfig().then(config => {
    outerConfig = config
    return createComponentFiles(config)
  }).then((config) => {
    addEntry(config)
    return addComponentToJSON(config)
  }).catch((err) => {
    console.log(err)
    removeComponent(outerConfig)
  })
}

function removeComponent(config) {
  removeComponentDir(config)
  removeComponentFromJSON(config)
  removeEntry(config)
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

function removeComponentFromJSON(config) {
  const name = config.name.toLowerCase()
  const components = require(path.resolve(__dirname, '../src/components.json'))
  components.packages = components.packages.filter(pkg => pkg.name.toLowerCase() !== name)
  createFile(path.resolve(__dirname, '../src/components.json'), JSON.stringify(components, null, 2)).then(() => {
    console.log(`从components.json删除组件${config.name}成功`)
  })
}

function removeComponentDir(config) {
  console.log('删除相关文件中')
  const name = config.name.toLowerCase()
  const dirPath = path.resolve(__dirname, `../src/packages/${name}`)
  if (fs.existsSync(dirPath)) {
    fs.rmdirSync(dirPath, {
      recursive: true
    })
  } else {
    console.log('不存在相应目录' + dirPath)
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
  name: 'W${config.name}'
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
