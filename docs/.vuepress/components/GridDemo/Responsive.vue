<template>
  <div>
    <w-row class="demo-row">
      <w-col span="8" xl="4">
        <div class="grid-content">span:8 md:4</div>
      </w-col>
      <w-col span="8" xl="16">
        <div class="grid-content">span:8 md:16</div>
      </w-col>
      <w-col span="8" xl="4">
        <div class="grid-content">span:8 md:4</div>
      </w-col>
    </w-row>
    <w-row class="demo-row">
      <w-col span="4" xl="6">
        <div class="grid-content">span:4 md:6</div>
      </w-col>
      <w-col span="8" xl="12">
        <div class="grid-content">span:8 md:12</div>
      </w-col>
      <w-col span="12" xl="6">
        <div class="grid-content">span:12 md:6</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
export default {
  name: 'GridResponsiveDemo'
}
</script>

<style lang="scss">
@import './demo';
</style>
