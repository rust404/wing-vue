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
