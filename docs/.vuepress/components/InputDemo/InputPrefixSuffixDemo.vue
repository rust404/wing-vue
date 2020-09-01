<template>
  <div>
    <w-input>
      <template v-slot:prefix>
        <Vuejs/>
      </template>
    </w-input>
    <w-input>
      <template v-slot:suffix>
        <TimesCircle/>
      </template>
    </w-input>
  </div>
</template>

<script>
import Vuejs from '@wing-ui/icons-vue/lib/Vuejs'
import TimesCircle from '@wing-ui/icons-vue/lib/TimesCircle'
export default {
  name: 'InputVModelDemo',
  components: {
    Vuejs,
    TimesCircle
  }
}
</script>
