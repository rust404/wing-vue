<template>
  <w-button @click.native="onClick">通知</w-button>
</template>

<script>
export default {
  name: 'MessageBaseDemo',
  methods: {
    onClick() {
      this.$message.success({
        content: 'hello'
      })
    }
  }
}
</script>
