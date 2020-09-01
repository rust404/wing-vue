<template>
  <div :class="inputWrapperClassName">
    <span class="wing-input-prepend" v-if="this.$slots.prepend"><slot name="prepend"/></span>
    <label :class="inputMainClassName">
      <span class="wing-input-prefix" v-if="this.$slots.prefix"><slot name="prefix"></slot></span>
      <input
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @change="$emit('change', $event)"
          @focus="onFocus"
          @blur="onBlur"
          @keypress="onPressEnter"
          ref="inputElement"
      >
      <span class="wing-input-suffix" v-if="this.$slots.suffix"><slot name="suffix"></slot></span>
    </label>
    <span class="wing-input-append" v-if="this.$slots.append"><slot name="append"></slot></span>
  </div>
</template>

<script>
export default {
  name: 'w-input',
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
    value: String
  },
  computed: {
    inputWrapperClassName() {
      return {
        'wing-input': true,
        [`wing-input-${this.size}`]: this.size
      }
    },
    inputMainClassName() {
      return {
        'wing-input-main': true,
        'is-focus': this.isFocus
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
    onPressEnter(e) {
      if (e.keyCode === 13) {
        this.$emit('press-enter', this.value)
      }
    }
  }
}
</script>
