<script type="text/jsx">
import {createPopper} from '@popperjs/core'
import Vue from 'vue'

export default {
  name: 'WTooltip',
  props: {
    title: String,
    placement: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      popperInstance: null,
      tooltipVM: null,
      reference: null,
      show: false
    }
  },
  methods: {
    onMouseEnter() {
      this.show = true
      this.tooltipVM.$nextTick(() => {
        this.updateOptions()
      })
    },
    onMouseLeave() {
      this.show = false
      this.tooltipVM.$nextTick(() => {
        this.updateOptions()
      })
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
    }
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
    reference.addEventListener('mouseenter', this.onMouseEnter)
    reference.addEventListener('mouseleave', this.onMouseLeave)

    const tooltip = this.tooltipVM.$el
    document.body.appendChild(tooltip)

    this.popperInstance = createPopper(reference, tooltip)
    this.updateOptions()
  },
  beforeDestroy() {
    this.reference.addEventListener('mouseenter', this.onMouseEnter)
    this.reference.addEventListener('mouseleave', this.onMouseLeave)
    this.popperInstance.destroy()
    this.tooltipVM.$destroy()
    this.tooltipVM.$el.remove()
  },
  render() {
    const tooltipVnode = (
        <transition name="fade">
          <div v-show={this.show} class={{
            'wing-tooltip': true,
            ['wing-tooltip-' + this.placement]: true
          }}>
            {this.title}
            <span class="wing-tooltip-arrow"/>
          </div>
        </transition>
    )
    this.tooltipVM.node = tooltipVnode
    return this.$slots.default[0]
  }
}
</script>
