# 主题定制
WingUI的样式使用sass进行开发，因此如果需要进行样式定制则需要安装`sass-loader`和`sass`

```bash
npm i -D sass-loader sass
```
or
```bash
yarn add --dev sass-loader sass
```

WingUI的对应样式变量可以在[这里](https://github.com/rust404/wing-vue/blob/master/src/styles/variables.scss)查看

## 通过构建工具定制样式
## 入口处理
如果你是**完整引入**，则需要将对应的`css`样式文件转换为`scss`入口文件，例子如下：
```js
import WingUI from '@wing-ui/wing-vue'
import '@wing-ui/wing-vue/lib/wing.scss'

Vue.use(WingUI)
```

如果你是**按需引入**，则需要变更babel的配置，配置内容变更如下：
```js
module.exports = {
  plugins: [
    ['import', {
      libraryName: '@wing-ui/wing-vue',
      libraryDirectory: 'lib/packages',
      style: true,
      customStyleName: function(name) {
        return `@wing-ui/wing-vue/src/packages/${name}/${name}.scss`
      }
    }]
  ],
}
```
## 构建工具配置
如果你使用的是`vue-cli`构建项目，则可以修改`vue.config.js`中的配置进行全局的变量定义：
```js {6}
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 添加全局变量的修改内容
        additionalData: '$primary-color: green;'
      },
    },
  },
};
```
如果使用webpack构建，则可以进行如下配置：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '$primary-color: green;'
            },
          },
        ],
      },
    ],
  },
};
```

如果你需要配置很多的变量，也可以将配置放在单独的一个`scss`文件中，然后通过`addtionalData`引入，例子如下：
```scss
/* customStyle.scss */
$primary-color: green;
```
config.js
```js
{
  addtionalData: `@import './customStyle.scss';`
}
```
