<template>
  <div>
    <w-tooltip title="tooltip" v-model="show1">
      <w-button>hover</w-button>
    </w-tooltip>
    <w-tooltip title="tooltip" v-model="show2" trigger="click">
      <w-button>click</w-button>
    </w-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      show1: false,
      show2: false,
    }
  }
}
</script>
