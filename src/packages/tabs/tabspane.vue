<template>
  <div class="wing-tabs-pane" :class="paneClass">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'WTabsPane',
  props: {
    label: {
      type: String,
      required: true
    },
    tabKey: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:activeKey', (key) => {
      this.isActive = key === this.tabKey
    })
  },
  computed: {
    paneClass() {
      return {
        'is-active': !this.disabled && this.isActive,
        'is-disabled': this.disabled
      }
    }
  }
}
</script>

