# Icon

## 使用方法
本项目使用fontawesome提供的[免费版本](https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free)icon

### 安装
```shell
npm i @wing-ui/icons-vue
or
yarn add @wing-ui/icons-vue
```
### 引入
首先全局引入icon对应的css

```js
import '@wing-ui/icons-vue/lib/icon.css';
```

然后选择一个icon，以`angle-double-down`为例，引入时采用驼峰命名，即为`AngleDoubleDown`

```js
import ArrowDoubleDown from '@wing-ui/icons-vue/lib/AngleDoubleDown';
```

::: warning
注意：如果使用**regular**类型的icon，为了跟solid区分，引入时需要在后面追加`Regular`
```js
import CheckCircle from '@wing-ui/icons-vue/lib/CheckCircle'
import CheckCircleRegular from '@wing-ui/icons-vue/lib/CheckCircleRegular'
```
:::


## 大小与颜色

<IconDemo/>

```vue
<template>
    <Download size="50px" color="red"/>
</template>

<script>
import Download from '@wing-ui/icons-vue/lib/Download'
export default {
  name: 'IconDemo',
  components: {
    Download
  }
}
</script>
```

## 参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| size   | Icon大小 |String|- | - |
| color  | Icon颜色 |String | - | - |
