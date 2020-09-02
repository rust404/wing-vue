<template>
  <div>
    <w-row class="demo-row">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="16" offset="2">
        <div class="grid-content">16 offset:2</div>
      </w-col>
      <w-col span="4">
        <div class="grid-content">4</div>
      </w-col>
    </w-row>
    <w-row class="demo-row">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8" offset="2">
        <div class="grid-content">8 offset:2</div>
      </w-col>
      <w-col span="10" offset="2">
        <div class="grid-content">10 offset:2</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
export default {
  name: 'GridOffsetDemo'
}
</script>
<style lang="scss">
@import './demo.scss';
</style>
