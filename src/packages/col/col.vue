<template>
  <div class="wing-col">
    <slot></slot>
  </div>
</template>

<script>
const spanProps = (name) => ({
  default: 24,
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
  },
  computed: {
    colClass() {
      return {
        [`wing-col-${this.span}`]: this.span,
        [`wing-col-offset-${this.offset}`]: this.offset,
      }
    }
  }
}
</script>
