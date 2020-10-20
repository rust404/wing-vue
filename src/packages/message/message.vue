<template>
  <collapse-transition-group
    name="zoom-in-top"
    class="wing-message"
    tag="ul"
    :style="{zIndex: globalConfig.zIndex}"
  >
    <li v-for="item in messages" :key="item.id" class="wing-message-item" :class="item.customClass">
      <span class="wing-message-icon" :class="iconClass(item.type)">
      <component :is="typeMap[item.type]"></component>
    </span>
      <span class="wing-message-content">{{ item.content }}</span>
    </li>
  </collapse-transition-group>
</template>

<script>
import CheckCircle from '@wing-ui/icons-vue/lib/CheckCircle'
import TimesCircle from '@wing-ui/icons-vue/lib/TimesCircle'
import InfoCircle from '@wing-ui/icons-vue/lib/InfoCircle'
import ExclamationCircle from '@wing-ui/icons-vue/lib/ExclamationCircle'
import Spinner from '@wing-ui/icons-vue/lib/Spinner'
import '@wing-ui/icons-vue/lib/icon.css'
import {messageType} from './messageType';
import {CollapseTransitionGroup} from '../../transitions/CollapseTransition';

export default {
  name: 'WMessage',
  components: {
    CheckCircle,
    TimesCircle,
    InfoCircle,
    ExclamationCircle,
    Spinner,
    CollapseTransitionGroup,
  },
  data() {
    return {
      messageId: 0,
      messages: [],
      typeMap: {
        loading: Spinner,
        danger: TimesCircle,
        success: CheckCircle,
        warning: ExclamationCircle,
        info: InfoCircle
      },
      globalConfig: {}
    }
  },
  methods: {
    iconClass(type) {
      return {
        [`wing-message-icon-${type}`]: type
      }
    },
    setConfig(globalConfig) {
      this.globalConfig = globalConfig
    },
    close(id) {
      const msg = this.messages.filter(msg => msg.id === Number(id))[0]
      if (msg) {
        this.messages = this.messages.filter(item => item !== msg)
        msg.onClose && msg.onClose()
      }
    },
    open({type, duration = 3000, ...rest}) {
      if (messageType.indexOf(type) === -1) {
        console.error(`message type should be one of ['loading', 'danger', 'warning', 'info', 'success']`)
      }
      const id = this.messageId++
      const globalConfig = typeof this.globalConfig === 'object' ? this.globalConfig : {}
      const newMsg = Object.assign({}, globalConfig, {
        id,
        type,
        ...rest
      })
      this.messages.push(newMsg)
      if (duration) {
        setTimeout(() => {
          this.close(id)
        }, Number(duration))
      }
      return id
    }
  }
}
</script>
