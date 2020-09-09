<template>
  <w-button @click.native="onClick">3秒后关闭</w-button>
</template>

<script>
export default {
  name: 'Duration',
  methods: {
    onClick() {
      this.$message.success({
        content: '3秒后关闭'
      })
    }
  }
}
</script>
