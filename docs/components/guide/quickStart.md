# 快速上手

## 完整引入
在项目入口文件(如`main.js`)中引入如下内容：

```js
import Vue from 'vue'
import App from './App.vue'
import WingUI from 'wing-vue'
import '@wing-ui/wing-vue/lib/wing.css'

Vue.config.productionTip = false
Vue.use(WingUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

接着在任一组件中即可使用WingUI中的组件：
```vue
<template>
  <w-button>hello</w-button>
</template>

<script>

export default {
  name: 'App'
}
</script>
```

## 按需引入
类似ElementUI，WingUI借助`babel-plugin-import`同样可以实现按需引入组件：
<br/>
首先，安装`babel-plugin-import`：
```bash
npm install babel-plugin-import -D
// or
yarn add --dev babel-plugin-import
```
然后，修改`babel.config.js`：
```js
module.exports = {
  plugins: [
    ['import', {
      libraryName: '@wing-ui/wing-vue',
      libraryDirectory: 'lib/packages',
      customStyleName: function(name) {
        return `@wing-ui/wing-vue/lib/packages/${name}.css`
      }
    }]
  ],
}
```
最后，你就可以在项目中按需使用WingUI的组件了：
```vue
<template>
  <w-button>hello</w-button>
</template>

<script>
import {Button} from '@wing/wing-vue';
export default {
  name: 'App',
  components: {
    'w-button': Button
  }
}
</script>
```
::: tip
注意：你完全可以不使用`babel-plugin-import`实现按需加载，只不过你需要手动指定对应组件及其样式的具体位置，例子如下：
```vue
<template>
  <w-button>hello</w-button>
</template>

<script>
import {Button} from '@wing-ui/wing-vue/lib/packages/button';
import '@wing-ui/wing-vue/lib/packages/button.css';
export default {
  name: 'App',
  components: {
    'w-button': Button
  }
}
</script>
```
:::
