<template>
  <div class="wing-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WCollapse',
  props: {
    value: {
      type: [String, Array]
    },
    accordion: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>
