<template>
  <div class="wing-collapse-panel" :class="panelClass">
    <header class="wing-collapse-panel-header" @click="onHeaderClick">
      {{title}}
    </header>
    <collapse-transition>
      <div class="wing-collapse-panel-content" v-show="isActive">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import {CollapseTransition} from '../../transitions/CollapseTransition';

export default {
  name: 'WCollapsePanel',
  components: {CollapseTransition},
  props: {
    name: {
      type: String,
      required: true
    },
    title: String
  },
  computed: {
    panelClass() {
      return {
        'is-active': this.isActive
      }
    },
    isActive() {
      if (Array.isArray(this.activeKeys)) {
        return this.activeKeys.indexOf(this.name) !== -1
      } else {
        return this.activeKeys === this.name
      }
    },
    isAccordion() {
      return this.$parent && this.$parent.accordion
    },
    activeKeys() {
      return this.$parent && this.$parent.value
    }
  },
  methods: {
    onHeaderClick() {
      let ret
      if (this.isActive) {
        if (this.isAccordion || !Array.isArray(this.activeKeys)) {
          ret = ''
        } else {
          ret = this.activeKeys.filter(key => key !== this.name)
        }
      } else {
        if (this.isAccordion) {
          ret = this.name
        } else if(!Array.isArray(this.activeKeys)) {
          ret = this.activeKeys ? [this.activeKeys, this.name] : this.name
        } else {
          ret = this.activeKeys.concat(this.name)
        }
      }
      this.$parent.$emit('change', ret)
    }
  }
}
</script>
