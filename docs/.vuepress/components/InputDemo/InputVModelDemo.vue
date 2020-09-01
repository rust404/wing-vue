<template>
  <div>
    <div>value: {{test}}</div>
    <w-input v-model="test" size="" @press-enter="onPress">
      <template v-slot:prefix>
        <Vuejs/>
      </template>
      <template v-slot:suffix>
        <TimesCircle/>
      </template>
      <template v-slot:prepend>
        prepend
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
  },
  data() {
    return {
      test: 'default'
    }
  },
  methods: {
    onPress(e) {
      console.log(e)
    }
  }
}
</script>
