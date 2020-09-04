<template>
  <div>
    <w-button @click.native="onClick('success')">成功</w-button>
    <w-button @click.native="onClick('danger')">危险</w-button>
    <w-button @click.native="onClick('info')">通知</w-button>
    <w-button @click.native="onClick('warning')">警告</w-button>
    <w-button @click.native="onClick('loading')">加载</w-button>
  </div>
</template>

<script>
export default {
  name: 'Types',
  methods: {
    onClick(type) {
      this.$message[type]({
        content: `${type}`,
        duration: 3000
      })
    }
  }
}
</script>
