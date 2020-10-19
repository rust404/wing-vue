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
