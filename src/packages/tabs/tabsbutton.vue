<script>
export default {
  name: 'WTabsButton',
  props: {
    tabKey: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    label: [String, Object, Array]
  },
  data() {
    return {
      isActive: false,
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:activeKey', (key) => {
      this.isActive = this.tabKey === key
    })
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      this.eventBus.$emit('update:activeKey', this.tabKey)
    }
  },
  computed: {
    tabBtnClass() {
      return {
        'is-active': !this.disabled && this.isActive,
        'is-disabled': this.disabled
      }
    },
  },
  render(h) {
    return h('button', {
      ref: 'tabBtn',
      on: {
        click: this.handleClick
      },
      'class': {
        'wing-tabs-btn': true,
        ...this.tabBtnClass
      }
    }, this.label)
  }
}
</script>
