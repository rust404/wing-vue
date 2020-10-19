<template>
  <w-button @click="isLoading = !isLoading" :loading="isLoading" type="primary">
    {{isLoading ? 'Loading' : 'Load'}}
  </w-button>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
