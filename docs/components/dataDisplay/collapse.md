# Collapse

## 基础用法
<CollapseDemo-Base/>

```vue
<template>
  <w-collapse v-model="key">
    <w-collapse-panel name="1" title="header1">content1</w-collapse-panel>
    <w-collapse-panel name="2" title="header2">content2</w-collapse-panel>
    <w-collapse-panel name="3" title="header3">content3</w-collapse-panel>
    <w-collapse-panel name="4" title="header4">content4</w-collapse-panel>
  </w-collapse>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      key: ''
    }
  }
}
</script>
```

## 手风琴模式
<CollapseDemo-Accordion/>

```vue
<template>
  <w-collapse v-model="key" accordion>
    <w-collapse-panel name="1" title="header1">content1</w-collapse-panel>
    <w-collapse-panel name="2" title="header2">content2</w-collapse-panel>
    <w-collapse-panel name="3" title="header3">content3</w-collapse-panel>
    <w-collapse-panel name="4" title="header4">content4</w-collapse-panel>
  </w-collapse>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      key: '1'
    }
  }
}
</script>
```

## Collapse参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| value/v-model| 当前展开的panel值 |String, String[]|- | - |
| accordion  | 是否开启手风琴模式(只开一个panel) | Boolean | - | - |

## CollapsePanel参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| name| 当前panel的键值 |String|- | - |
| title  | panel标题内容 | String | - | - |
