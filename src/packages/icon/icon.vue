<template>
  <span class="w-icon" :style="wrapperStyle" :spin="this.spin" v-html="this.icons[name]">
  </span>
</template>

<script>
import iconPaths from './iconPaths';

export default {
  name: 'w-icon',
  props: {
    name: String,
    size: {
      type: String,
      default: '1em'
    },
    spin: Boolean,
    color: {
      type: String
    }
  },
  created() {
    this.icons = iconPaths
  },
  computed: {
    wrapperStyle() {
      return {
        width: this.size,
        height: this.size,
        color: this.color,
      }
    }
  },
  data() {
    return {
      icons: {}
    }
  },
  render(h) {

  }
}
</script>
