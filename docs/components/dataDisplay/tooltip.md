# Tooltip

## 基础用法
两种触发方式`hover`和`click` 

<br/>
<TooltipDemo-Base/>

```vue
<template>
  <div>
    <w-tooltip title="tooltip" v-model="show1">
      <w-button>hover</w-button>
    </w-tooltip>
    <w-tooltip title="tooltip" v-model="show2" trigger="click">
      <w-button>click</w-button>
    </w-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      show1: false,
      show2: false,
    }
  }
}
</script>
```

## Placement
可以修改placement属性修改四个方向
<TooltipDemo-Placement/>

```vue
<template>
  <div>
    <w-tooltip v-model="show1" title="top" placement="top">
      <w-button>top</w-button>
    </w-tooltip>
    <w-tooltip v-model="show2" title="left" placement="left">
      <w-button>left</w-button>
    </w-tooltip>
    <w-tooltip v-model="show3" title="right" placement="right">
      <w-button>right</w-button>
    </w-tooltip>
    <w-tooltip v-model="show4" title="bottom" placement="bottom">
      <w-button>bottom</w-button>
    </w-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Placement',
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  }
}
</script>
```

## 参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| value/v-model| 是否显示 |String|- | - |
| trigger | 触发方式 |String|'hover', 'click' | 'hover' |
| placement| 放置位置 |String|'top', 'bottom', 'left', 'right' | 'top' |
