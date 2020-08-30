<template>
  <button :class="className">
    <w-icon spin name="loading" class="loading-icon" v-if="loading"/>
    <span><slot/></span>
  </button>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'w-button',
  components: {
    WIcon: Icon
  },
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
    },
    loading: Boolean
  },
  computed: {
    className() {
      return {
        'wing-btn': true,
        [`wing-btn-${this.type}`]: this.type,
        [`wing-btn-${this.size}`]: this.size,
        'is-disabled': this.disabled,
        'is-loading': this.loading,
      }
    }
  }
}
</script>
