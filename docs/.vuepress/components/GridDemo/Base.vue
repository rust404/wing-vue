<template>
  <div>
    <w-row class="demo-row">
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
    <w-row class="demo-row">
      <w-col span="1">
        <div class="grid-content">1</div>
      </w-col>
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="21">
        <div class="grid-content">21</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
export default {
  name: 'GridBaseDemo'
}
</script>

<style lang="scss">
@import './demo';
</style>
