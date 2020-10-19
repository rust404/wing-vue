<template>
  <div>
    <w-row class="demo-row" gutter="10">
      <w-col span="8">
        <div class="grid-content">8</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content">8</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content">8</div>
      </w-col>
    </w-row>
    <w-row class="demo-row" gutter="10">
      <w-col span="4">
        <div class="grid-content">4</div>
      </w-col>
      <w-col span="14">
        <div class="grid-content">14</div>
      </w-col>
      <w-col span="6">
        <div class="grid-content">6</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
export default {
  name: 'GridGutterDemo'
}
</script>
<style lang="scss">
@import './demo.scss';
</style>
