<script type="text/jsx">
import {createPopper} from '@popperjs/core'
import Vue from 'vue'

export default {
  name: 'WTooltip',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    title: String,
    placement: {
      type: String,
      default: 'top'
    },
    value: Boolean,
    trigger: {
      default: 'hover',
      type: String
    }
  },
  data() {
    return {
      popperInstance: null,
      tooltipVM: null,
      reference: null,
      timer: null
    }
  },
  methods: {
    onClick() {
      if (this.trigger !== 'click') return
      this.$emit('change', !this.value)
      this.tooltipVM.$nextTick(() => {
        this.updateOptions()
      })
    },
    onMouseEnter() {
      if (this.trigger !== 'hover') return
      clearTimeout(this.timer)
      this.$emit('change', true)
      this.tooltipVM.$nextTick(() => {
        this.updateOptions()
      })
    },
    onMouseLeave() {
      if (this.trigger !== 'hover') return
      this.timer = setTimeout(() => {
        this.$emit('change', false)
        this.tooltipVM.$nextTick(() => {
          this.updateOptions()
        })
      }, 100)
    },
    updateOptions() {
      this.popperInstance.setOptions({
        placement: this.placement,
        modifiers: {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }
      })
    },
    bindEvent() {
      const reference = this.reference = this.$slots.default[0].elm
      reference.addEventListener('mouseenter', this.onMouseEnter)
      reference.addEventListener('mouseleave', this.onMouseLeave)
      reference.addEventListener('click', this.onClick)

      const tooltip = this.tooltipVM.$el
      tooltip.addEventListener('mouseenter', this.onMouseEnter)
      tooltip.addEventListener('mouseleave', this.onMouseLeave)
    },
    removeEvent() {
      const reference = this.reference = this.$slots.default[0].elm
      reference.removeEventListener('mouseenter', this.onMouseEnter)
      reference.removeEventListener('mouseleave', this.onMouseLeave)
      reference.removeEventListener('click', this.onClick)

      const tooltip = this.tooltipVM.$el
      tooltip.removeEventListener('mouseenter', this.onMouseEnter)
      tooltip.removeEventListener('mouseleave', this.onMouseLeave)
    },
  },
  created() {
    this.tooltipVM = new Vue({
      data() {
        return {
          node: null
        }
      },
      render() {
        return (<div>{this.node}</div>)
      }
    }).$mount()
  },
  mounted() {
    const reference = this.reference = this.$slots.default[0].elm
    const tooltip = this.tooltipVM.$el
    document.body.appendChild(tooltip)
    this.bindEvent()

    this.popperInstance = createPopper(reference, tooltip)
    this.updateOptions()
  },
  beforeDestroy() {
    this.removeEvent()

    this.popperInstance.destroy()
    this.tooltipVM.$destroy()
    this.tooltipVM.$el.remove()
  },
  render() {
    const tooltipVnode = (
        <transition name="fade">
          <div v-show={this.value} class={{
            'wing-tooltip': true,
            ['wing-tooltip-' + this.placement]: true
          }}>
            {this.$slots.content || this.title}
            <span class="wing-tooltip-arrow"/>
          </div>
        </transition>
    )
    this.tooltipVM.node = tooltipVnode
    return this.$slots.default[0]
  }
}
</script>
