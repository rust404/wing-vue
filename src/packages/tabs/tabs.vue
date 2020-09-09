<template>
  <div class="wing-tabs">
    <div class="wing-tabs-header">
      <w-tabs-button
          v-for="data in tabData"
          :tabKey="data.tabKey"
          :ref="data.tabKey"
          :disabled="data.disabled"
          @click.native="!data.disabled && $emit('tab-click', $event, data.tabKey)"
          :label="data.label"
      >
      </w-tabs-button>
      <span class="wing-tabs-header-bar" :style="barStyle"></span>
    </div>
    <div class="wing-tabs-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import WTabsButton from './tabsbutton.vue'
import {getStyle} from '../../utils';

export default {
  name: 'WTabs',
  components: {
    WTabsButton
  },
  model: {
    prop: 'activeKey',
    event: 'update:activeKey'
  },
  props: {
    activeKey: {
      type: String,
      required: true
    },
    size: {
      type: String,
    }
  },
  provide: function () {
    return {
      eventBus: this.eventBus
    }
  },
  data() {
    return {
      tabData: [],
      barStyle: {
        width: '',
        left: ''
      },
      eventBus: new Vue()
    }
  },
  methods: {
    updateBarStyle(element) {
      this.barStyle.width = getContentWidth(element)
      this.barStyle.left = element.offsetLeft + 'px'

      function getContentWidth(element) {
        const width =  parseInt(getStyle(element, 'width'))
        const paddingLeft = parseInt(getStyle(element, 'padding-left'))
        const paddingRight = parseInt(getStyle(element, 'padding-right'))
        return width - paddingLeft - paddingRight + 'px'
      }
    },
  },
  created() {
    this.eventBus.$on('update:activeKey', (key) => {
      this.$emit('update:activeKey', key)
      this.updateBarStyle(this.$refs[key][0].$el)

      if (this.activeKey !== key) {
        this.$emit('change', key)
      }
    })
  },
  mounted() {
    this.$children && this.$children.forEach((child) => {
      if (child.$vnode.componentOptions.tag === 'w-tabs-pane') {
        // console.log(child.$slots)
        if (!child.tabKey) {
          console.error('prop tabKey is required in WTabsPane')
        }
        const label = child.$slots.label || child.label
        if (!label) {
          console.error('neither prop label or slot label is not provided in WTabsPane')
        }
        this.tabData.push({
          label,
          tabKey: child.tabKey,
          disabled: child.disabled
        })
      }
    })
    this.$nextTick(() => {
      this.eventBus.$emit('update:activeKey', this.activeKey)
    })
  },
}
</script>
