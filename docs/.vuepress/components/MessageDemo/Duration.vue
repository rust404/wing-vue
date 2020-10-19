<template>
  <w-button @click="onClick">5秒后关闭</w-button>
</template>

<script>
export default {
  name: 'Duration',
  methods: {
    onClick() {
      this.$message.success({
        content: '5秒后关闭',
        duration: 5000,
      })
    }
  }
}
</script>
