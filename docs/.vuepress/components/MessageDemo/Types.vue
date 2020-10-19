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
