<template>
  <div class="wing-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WRow',
  props: {
    gutter: String,
    justify: {
      type: String,
      validator(value) {
        return ['start', 'end', 'center', 'space-between', 'space-around'].indexOf(value) !== -1
      }
    },
    align: {
      type: String,
      validator(value) {
        return ['start', 'end', 'center'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        justifyContent: this.justify,
        alignItems: this.align,
      }
    }
  }
}
</script>
