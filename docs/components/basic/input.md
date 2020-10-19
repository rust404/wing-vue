# Input

## 基础用法
<w-input placeholder="placeholder"/>

```vue
<w-input placeholder="placeholder"/>
```

## 前缀和后缀
<InputDemo-PrefixSuffix/>

```vue
<template>
  <div>
    <w-input>
      <template v-slot:prefix>
        <Vuejs/>
      </template>
    </w-input>
    <w-input>
      <template v-slot:suffix>
        <TimesCircle/>
      </template>
    </w-input>
  </div>
</template>

<script>
import Vuejs from '@wing-ui/icons-vue/lib/Vuejs'
import TimesCircle from '@wing-ui/icons-vue/lib/TimesCircle'
export default {
  name: 'PrefixSuffix',
  components: {
    Vuejs,
    TimesCircle
  }
}
</script>
```

## 前置与后置
<template>
    <w-input>
        <template v-slot:prepend>http://</template>
        <template v-slot:append>.com</template>
    </w-input>
</template>

```vue
<template>
    <w-input>
        <template v-slot:prepend>http://</template>
        <template v-slot:append>.com</template>
    </w-input>
</template>
```

## 三种尺寸
<w-input size="lg" placeholder="lg"/>
<w-input placeholder="默认"/>
<w-input size="sm" placeholder="sm"/>

```vue
<w-input size="lg" placeholder="lg"/>
<w-input placeholder="默认"/>
<w-input size="sm" placeholder="sm"/>
```

## 禁用
<w-input disabled placeholder="disabled"/>

```vue
<w-input disabled placeholder="disabled"/>
```

## 一键清除
<InputDemo-AllowClear/>

```vue
<template>
  <w-input v-model="val" allow-clear placeholder="allowClear"/>
</template>

<script>
export default {
  name: 'ClearDemo',
  data() {
    return {
      val: ''
    }
  }
}
</script>
```

## 参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| value/v-model| 输入框的值 |String|- | - |
| disabled  | 禁用 | Boolean | - | - |
| allowClear  | 显示一键清除按钮 | Boolean | - | - |
| size  | 输入框大小 | String | 'lg', 'sm', 'md' | 'md' |

## slot
| name | 说明 |
| ------ |:-------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
