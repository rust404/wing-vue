<template>
  <div :class="inputWrapperClassName">
    <span class="wing-input-prepend" v-if="this.$slots.prepend"><slot name="prepend"/></span>
    <label :class="inputMainClassName">
      <span class="wing-input-prefix" v-if="this.$slots.prefix"><slot name="prefix"></slot></span>
      <input
          v-bind="$attrs"
          type="text"
          :value="value"
          :disabled="disabled"
          @input="$emit('input', $event.target.value)"
          @change="$emit('change', $event)"
          @focus="onFocus"
          @blur="onBlur"
          @keypress="onPressEnter"
      >
      <span
          class="wing-input-suffix clear-icon"
          v-if="allowClear"
          :style="{
            visibility: value && value.length > 0 ? 'visible' : 'hidden'
          }"
          @click="onClear"
      >
        <TimesCircle/>
      </span>
      <span class="wing-input-suffix" v-if="$slots.suffix"><slot name="suffix"></slot></span>
    </label>
    <span class="wing-input-append" v-if="$slots.append"><slot name="append"></slot></span>
  </div>
</template>

<script>
import TimesCircle from '@wing-ui/icons-vue/lib/TimesCircle'

export default {
  name: 'w-input',
  components: {
    TimesCircle
  },
  data() {
    return {
      isFocus: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    size: {
      type: String,
      validator(size) {
        return ['lg', 'sm', ''].indexOf(size) !== -1
      }
    },
    value: String,
    disabled: {
      default: false,
      type: Boolean
    },
    allowClear: {
      default: false,
      type: Boolean
    },
  },
  computed: {
    inputWrapperClassName() {
      return {
        'wing-input': true,
        [`wing-input-${this.size}`]: this.size,
        'is-disabled': this.disabled,
      }
    },
    inputMainClassName() {
      return {
        'wing-input-main': true,
        'is-focus': this.isFocus,
        'is-disabled': this.disabled,
      }
    }
  },
  methods: {
    onFocus(e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    onBlur(e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    onClear() {
      this.$emit('input', '')
    },
    onPressEnter() {
      if (e.keyCode === 13) {
        this.$emit('press-enter', this.value)
      }
    }
  }
}
</script>
