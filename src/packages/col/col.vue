<template>
  <div class="wing-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const spanProps = (name) => ({
  type: [Number, String],
  validator(value) {
    const number = parseInt(value)
    if (String(number) !== String(value)) {
      return 'please input an integer number or string'
    }
    if (number < 1 || number > 24) {
      return `${name} must between 1 and 24`
    }
    return true
  }
})
export default {
  name: 'WCol',
  props: {
    span: spanProps('span'),
    offset: spanProps('offset'),
    xs: {
      type: [String, Object]
    },
    sm: {
      type: [String, Object]
    },
    md: {
      type: [String, Object]
    },
    lg: {
      type: [String, Object]
    },
    xl: {
      type: [String, Object]
    },
    xxl: {
      type: [String, Object]
    },
  },
  computed: {
    colClass() {
      const breakPointsProps = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].reduce((acc, point) => {
        if (this[point]) {
          acc[`wing-col-${point}-${this[point]}`] = this[point]
        }
        return acc
      }, {})
      return {
        [`wing-col-${this.span}`]: this.span,
        [`wing-col-offset-${this.offset}`]: this.offset,
        ...breakPointsProps
      }
    },
    colStyle() {
      const halfGutter = this.gutter && this.gutter / 2 + 'px'
      return {
        paddingLeft: halfGutter,
        paddingRight: halfGutter
      }
    },
    gutter() {
      return this.$parent && this.$parent.gutter
    }
  }
}
</script>
