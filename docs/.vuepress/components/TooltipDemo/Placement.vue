<template>
  <div>
    <w-tooltip v-model="show1" title="top" placement="top">
      <w-button>top</w-button>
    </w-tooltip>
    <w-tooltip v-model="show2" title="left" placement="left">
      <w-button>left</w-button>
    </w-tooltip>
    <w-tooltip v-model="show3" title="right" placement="right">
      <w-button>right</w-button>
    </w-tooltip>
    <w-tooltip v-model="show4" title="bottom" placement="bottom">
      <w-button>bottom</w-button>
    </w-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Placement',
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  }
}
</script>
