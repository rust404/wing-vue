# Button

## 类型
<br/>
<w-button>Default</w-button>
<w-button type="primary">Primary</w-button>
<w-button type="danger">Danger</w-button>
<w-button type="success">Success</w-button>
<w-button type="info">Info</w-button>
<w-button type="warning">Warning</w-button>

```vue
<w-button>Default</w-button>
<w-button type="primary">Primary</w-button>
<w-button type="danger">Danger</w-button>
<w-button type="success">Success</w-button>
<w-button type="info">Info</w-button>
<w-button type="warning">Warning</w-button>
```

## 大小
<br/>
<w-button>normal</w-button>
<w-button type="primary">normal</w-button>
<br/>
<br/>
<w-button size="sm">small</w-button>
<w-button size="sm" type="primary">small</w-button>
<br/>
<br/>
<w-button size="lg">Large</w-button>
<w-button type="primary" size="lg">Large</w-button>

```vue
<br/>
<w-button>normal</w-button>
<w-button type="primary">normal</w-button>
<br/>
<br/>
<w-button size="sm">small</w-button>
<w-button size="sm" type="primary">small</w-button>
<br/>
<br/>
<w-button size="lg">Large</w-button>
<w-button type="primary" size="lg">Large</w-button>
```

## 禁用
<br/>
<w-button type="primary">normal</w-button>
<w-button type="primary" disabled>disabled</w-button>

```vue
<w-button type="primary">normal</w-button>
<w-button type="primary" disabled>disabled</w-button>
```

## 加载中 
<br/>
<ButtonDemo-Loading/>

<w-button loading>Default</w-button>
<w-button loading type="primary">Primary</w-button>
<w-button loading type="danger">Danger</w-button>

```vue
<template>
  <w-button @click="isLoading = !isLoading" :loading="isLoading" type="primary">
    {{isLoading ? 'Loading' : 'Load'}}
  </w-button>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
```

## 带icon
<br/>
<ButtonDemo-Icon/>

```vue
<template>
  <w-button><Download style="margin-right: 4px"/>Download</w-button>
</template>

<script>
import Download from '@wing-ui/icons-vue/lib/Download'
export default {
  name: 'Icon',
  components: {
    Download
  }
}
</script>
```

## 参数
| 属性        | 说明   | 类型   | 可选值  | 默认值 |
| ---------- |:-------|:------|:-----| --- |
| type      | 按钮类型 |String|'primary','danger','warning','info', 'success','default'  | 'default' |
| disabled  | 禁用      |Boolean | - | - |
| size | 按钮大小  |String|    'lg', 'sm', 'md' | 'md' |
| loading | 是否加载中 |Boolean|   -   | - |
