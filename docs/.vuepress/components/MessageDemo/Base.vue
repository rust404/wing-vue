<template>
  <w-button @click="onClick">通知</w-button>
</template>

<script>
export default {
  name: 'MessageBaseDemo',
  mounted() {
    this.$message.setConfig({
      zIndex: 1000,
      onClose() {
        console.log('closed!')
      }
    })
  },
  methods: {
    onClick() {
      this.$message.success({
        content: 'hello',
      })
    }
  }
}
</script>
