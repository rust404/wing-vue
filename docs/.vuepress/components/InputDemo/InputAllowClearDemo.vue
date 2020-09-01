<template>
  <w-input v-model="val" allow-clear placeholder="allowClear"/>
</template>

<script>
export default {
  name: 'InputAllowClearDemo',
  data() {
    return {
      val: ''
    }
  }
}
</script>
