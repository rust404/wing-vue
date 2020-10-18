<template>
  <w-collapse v-model="key">
    <w-collapse-panel name="1" title="header1">content1</w-collapse-panel>
    <w-collapse-panel name="2" title="header2">content2</w-collapse-panel>
    <w-collapse-panel name="3" title="header3">content3</w-collapse-panel>
    <w-collapse-panel name="4" title="header4">content4</w-collapse-panel>
  </w-collapse>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      key: ''
    }
  }
}
</script>
