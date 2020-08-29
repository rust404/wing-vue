<template>
  <button :class="className">
    <span><slot/></span>
  </button>
</template>

<script>
export default {
  name: 'w-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(prop) {
        return ['primary', 'danger', 'warning', 'info', 'success', 'default'].indexOf(prop) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(prop) {
        return ['lg', 'sm', ''].indexOf(prop) !== -1
      }
    }
  },
  computed: {
    className() {
      return {
        'wing-btn': true,
        [`wing-btn-${this.type}`]: this.type,
        [`wing-btn-${this.size}`]: this.size,
        'is-disabled': this.disabled,
      }
    }
  }
}
</script>
