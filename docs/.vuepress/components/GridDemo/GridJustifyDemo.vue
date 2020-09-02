<template>
  <div>
    <w-row class="demo-row" justify="center">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content">8</div>
      </w-col>
      <w-col span="10">
        <div class="grid-content">10</div>
      </w-col>
    </w-row>
    <w-row class="demo-row" justify="space-between">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content">8</div>
      </w-col>
      <w-col span="10">
        <div class="grid-content">10</div>
      </w-col>
    </w-row>
    <w-row class="demo-row" justify="space-around">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content">8</div>
      </w-col>
      <w-col span="10">
        <div class="grid-content">10</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
export default {
  name: 'GridJustifyDemo'
}
</script>
<style lang="scss">
@import './demo.scss';
</style>
