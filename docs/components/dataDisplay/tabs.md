# Tabs

## 基础用法
<br/>
<TabsDemo-Base/>

```vue
<template>
  <w-tabs v-model="tabKey">
    <w-tabs-pane label="动画" tabKey="1">动画内容</w-tabs-pane>
    <w-tabs-pane label="音乐" tabKey="2">音乐内容</w-tabs-pane>
    <w-tabs-pane label="舞xxxx蹈" tabKey="3">舞蹈内容</w-tabs-pane>
  </w-tabs>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      tabKey: '3'
    }
  },
}
</script>
```

## 禁用

<TabsDemo-Disabled/>
```vue
<template>
  <w-tabs v-model="tabKey" @change="onChange" @tab-click="onTabClick">
    <w-tabs-pane label="动画" tabKey="1">动画内容</w-tabs-pane>
    <w-tabs-pane label="音乐" tabKey="2">音乐内容</w-tabs-pane>
    <w-tabs-pane label="舞xxxx蹈" tabKey="3">舞蹈内容</w-tabs-pane>
    <w-tabs-pane disabled label="影视" tabKey="4">影视内容</w-tabs-pane>
  </w-tabs>
</template>

<script>
export default {
  name: 'Disabled',
  data() {
    return {
      tabKey: '1'
    }
  },
}
</script>
```

## 自定义label
<TabsDemo-CustomLabel/>

```vue
<template>
  <w-tabs v-model="tabKey">
    <w-tabs-pane label="动画" tabKey="1">
      <template v-slot:label>
        <vuejs style="margin-right: 4px"/>动画内容
      </template>
      动画内容
    </w-tabs-pane>
    <w-tabs-pane label="音乐" tabKey="2">音乐内容</w-tabs-pane>
    <w-tabs-pane label="舞xxxx蹈" tabKey="3">舞蹈内容</w-tabs-pane>
    <w-tabs-pane disabled label="影视" tabKey="4">影视内容
      <template v-slot:label>
        <ad style="margin-right: 4px"/>
        hello
      </template>
    </w-tabs-pane>
  </w-tabs>
</template>

<script>
import Ad from '@wing-ui/icons-vue/lib/Ad'
import Vuejs from '@wing-ui/icons-vue/lib/Vuejs'
export default {
  name: 'CustomLabel',
  components: {
    Ad,
    Vuejs
  },
  data() {
    return {
      tabKey: '1'
    }
  }
}
</script>
```

## Tabs参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| value/v-model| 选中的选项卡的name |String|- | - |

## TabsPane参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| label | 选项卡标题 |String|- | - |
| tabKey | 选项卡键值 |String|- | - |
| disabled | 是否禁用 |Boolean|- | - |

## TabsPane slot
| name | 说明 |
| ------ |:-------|
| label | 选项卡标题 |
| default | 选项卡内容 |
