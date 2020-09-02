<template>
  <div class="wing-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WRow',
  props: {
    gutter: [Number, String],
    justify: String,
    align: String
  },
  computed: {
    rowStyle() {
      return {
        justifyContent: this.justify,
        alignItems: this.align,
        marginLeft: this.gutter && -this.gutter / 2 + 'px',
        marginRight: this.gutter && -this.gutter / 2 + 'px',
      }
    }
  }
}
</script>
