<template>
  <div>
    <w-row class="demo-row" justify="space-between" style="height: 100px; background: #efefef">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content" style="height: 60px; line-height: 60px">8</div>
      </w-col>
      <w-col span="10">
        <div class="grid-content">10</div>
      </w-col>
    </w-row>
    <w-row class="demo-row" align="center" justify="space-between" style="height: 100px; background: #efefef">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content" style="height: 60px; line-height: 60px">8</div>
      </w-col>
      <w-col span="10">
        <div class="grid-content">10</div>
      </w-col>
    </w-row>
    <w-row class="demo-row" align="flex-end" justify="space-between" style="height: 100px; background: #efefef">
      <w-col span="2">
        <div class="grid-content">2</div>
      </w-col>
      <w-col span="8">
        <div class="grid-content" style="height: 60px; line-height: 60px">8</div>
      </w-col>
      <w-col span="10">
        <div class="grid-content">10</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
export default {
  name: 'GridAlignDemo'
}
</script>

<style lang="scss">
@import "./demo.scss";
</style>
