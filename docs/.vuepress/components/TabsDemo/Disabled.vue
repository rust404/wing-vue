<template>
  <w-tabs v-model="tabKey">
    <w-tabs-pane label="动画" tabKey="1">动画内容</w-tabs-pane>
    <w-tabs-pane label="音乐" tabKey="2">音乐内容</w-tabs-pane>
    <w-tabs-pane label="舞xxxx蹈" tabKey="3">舞蹈内容</w-tabs-pane>
    <w-tabs-pane disabled label="影视" tabKey="4">影视内容</w-tabs-pane>
  </w-tabs>
</template>

<script>
export default {
  name: 'Disabled',
  data() {
    return {
      tabKey: '1'
    }
  },
}
</script>
