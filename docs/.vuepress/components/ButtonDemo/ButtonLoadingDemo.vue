<template>
  <w-button @click.native="isLoading = !isLoading" :loading="isLoading" type="primary">
    {{isLoading ? 'Loading' : 'Load'}}
  </w-button>
</template>

<script>
export default {
  name: 'ButtonDemo',
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
