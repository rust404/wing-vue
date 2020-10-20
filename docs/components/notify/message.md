# Message

## 安装插件
如果是按需引入，需要在在入口文件`main.js`使用`Message`插件，完整引入则无需进行这一步骤

```js
import {Message} from '@wing-ui/wing-vue'
Vue.use(Message)
```

## 基础使用 
引入插件后，可通过使用`this.$message.open`方法发送消息，在发送之前，可以通过`this.$message.setConfig`方法来进行全局配置

<br/>
<ClientOnly>
  <MessageDemo-Base/>
</ClientOnly>

```vue {10}
<template>
  <w-button @click="onClick">通知</w-button>
</template>

<script>
export default {
  name: 'Base',
  mounted() {
    /** 此行是为了解决vuepress顶栏zIndex过大遮蔽message容器的问题 **/
    this.$message.setConfig({zIndex: 1000}) 
  },
  methods: {
    onClick() {
      this.$message.open({
        type: 'success',
        content: 'hello',
      })
    }
  }
}
</script>
```

## 停留时长
默认情况下通知经过3秒后自动关闭，可通过duration属性自定义时间

<ClientOnly>
  <MessageDemo-Duration/>
</ClientOnly>

```vue
<template>
  <w-button @click="onClick">5秒后自动关闭</w-button>
</template>

<script>
export default {
  name: 'Duration',
  methods: {
    onClick() {
      this.$message.success({
        content: '5秒后关闭',
        duration: 5000
      })
    }
  }
}
</script>
```
## 各种类型的通知
除了`this.$message.open(config)`发送消息，也可通过`this.$message.success(config)`的形式发送，后者就无需提供`type`属性，
两种方式都会返回message的id，id一般用于手动关闭消息

<br/>
<ClientOnly>
  <MessageDemo-Types/>
</ClientOnly>

```vue
<template>
  <div>
    <w-button @click="onClick('success')">成功</w-button>
    <w-button @click="onClick('danger')">危险</w-button>
    <w-button @click="onClick('info')">通知</w-button>
    <w-button @click="onClick('warning')">警告</w-button>
    <w-button @click="onClick('loading')">加载</w-button>
  </div>
</template>

<script>
export default {
  name: 'Types',
  methods: {
    onClick(type) {
      this.$message[type]({
        content: `${type}`
      })
    }
  }
}
</script>
```

## 手动关闭
当`duration`为0时，消息不会自动关闭，可通过`this.$message.close(id)`的方式手动进行关闭

<ClientOnly>
  <MessageDemo-Close/>
</ClientOnly>


```vue
<template>
  <div>
    <w-button @click="open">打开</w-button>
    <w-button @click="close">关闭</w-button>
  </div>
</template>

<script>
export default {
  name: 'Close',
  data() {
    return {
      id: null
    }
  },
  methods: {
    open() {
      this.id = this.$message.loading({
        content: '手动关闭',
        duration: 0,
      })
    },
    close() {
      this.$message.close(this.id)
    }
  }
}
</script>
```
## config(open, success等方法使用)
|属性	|说明	|类型	|默认值|可选值|
|---|---|---|---|---|
|type	|消息类型	|String|	-|success, danger, info, warning, loading|
|content	|提示内容	|String|	-|-|
|duration	|自动关闭的延时，单位秒。设为 0 时不自动关闭	|number|	3000|-|
|onClose	|关闭时触发的回调函数	|function|	-|-|

## 全局配置(setConfig方法使用)
|属性	|说明	|类型	|默认值|可选值|
|---|---|---|---|---|
|zIndex	|指定message容器的zIndex	|Number|	-|-|
