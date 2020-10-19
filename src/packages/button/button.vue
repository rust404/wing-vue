<template>
  <button :class="className" @click="$emit('click', $event)">
    <spinner spin class="spinner" v-if="loading"/>
    <slot/>
  </button>
</template>

<script>
import Spinner from '@wing-ui/icons-vue/lib/Spinner';
import '@wing-ui/icons-vue/lib/icon.css';
export default {
  name: 'WButton',
  components: {
    Spinner
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
        return ['lg', 'sm', 'md'].indexOf(prop) !== -1
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
