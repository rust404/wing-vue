<template>
  <w-tabs v-model="tabKey">
    <w-tabs-pane label="动画" tabKey="1">动画内容</w-tabs-pane>
    <w-tabs-pane label="音乐" tabKey="2">音乐内容</w-tabs-pane>
    <w-tabs-pane label="舞xxxx蹈" tabKey="3">舞蹈内容</w-tabs-pane>
  </w-tabs>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      tabKey: '3'
    }
  },
}
</script>
