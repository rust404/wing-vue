<template>
  <transition-group
      name="zoom-in-top"
      class="wing-message"
      tag="ul"
      @enter="enter"
      @leave="leave"
  >
    <li v-for="item in messages" :key="item.id" class="wing-message-item">
      <span class="wing-message-icon" :class="iconClass(item.type)">
      <component :is="typeMap[item.type]"></component>
    </span>
      <span class="wing-message-content">{{ item.content }}</span>
    </li>
  </transition-group>
</template>

<script>
import CheckCircle from '@wing-ui/icons-vue/lib/CheckCircle'
import TimesCircle from '@wing-ui/icons-vue/lib/TimesCircle'
import InfoCircle from '@wing-ui/icons-vue/lib/InfoCircle'
import ExclamationCircle from '@wing-ui/icons-vue/lib/ExclamationCircle'
import Spinner from '@wing-ui/icons-vue/lib/Spinner'
import '@wing-ui/icons-vue/lib/icon.css'
import {messageType} from './messageType';
import {getStyle} from '../../utils';

let messageId = 0;
export default {
  name: 'WMessage',
  components: {
    CheckCircle,
    TimesCircle,
    InfoCircle,
    ExclamationCircle,
    Spinner,
  },
  data() {
    return {
      messages: [],
      typeMap: {
        loading: Spinner,
        danger: TimesCircle,
        success: CheckCircle,
        warning: ExclamationCircle,
        info: InfoCircle
      }
    }
  },
  methods: {
    iconClass(type) {
      return {
        [`wing-message-icon-${type}`]: type
      }
    },
    setStyle(el, options) {
      Object.keys(options).forEach(key => {
        el.style[key] = options[key]
      })
    },
    clearVerticalStyle(el) {
      this.setStyle(el, {
        height: '0px',
        marginTop: '0px',
        marginBottom: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        borderTopWidth: '0px',
        borderBottomWidth: '0px'
      })
    },
    enter(el) {
      const verticalStyle = {
        height: getStyle(el, 'height'),
        marginTop: getStyle(el, 'margin-top'),
        marginBottom: getStyle(el, 'margin-bottom'),
        paddingTop: getStyle(el, 'padding-top'),
        paddingBottom: getStyle(el, 'padding-bottom'),
        borderTopWidth: getStyle(el, 'border-top-width'),
        borderBottomWidth: getStyle(el, 'border-bottom-width')
      }
      this.clearVerticalStyle(el)
      el.style.transition = `all 300ms`
      setTimeout(() => {
        this.setStyle(el, verticalStyle)
      }, 0)
    },
    leave(el) {
      this.clearVerticalStyle(el)
      el.style.height = '0px'
      el.style.marginTop = '0px'
      el.style.marginBottom = '0px'
      el.style.paddingTop = '0px'
      el.style.paddingBottom = '0px'
      el.style.borderTopWidth = '0px'
      el.style.borderBottomWidth = '0px'
    },
    close(id) {
      const msg = this.messages.filter(msg => msg.id === Number(id))[0]
      if (msg) {
        this.messages = this.messages.filter(item => item !== msg)
        msg.onClose && msg.onClose()
      }
    },
    open({type, content, duration, onClose}) {
      if (messageType.indexOf(type) === -1) {
        console.error(`message type should be one of ['loading', 'danger', 'warning', 'info', 'success']`)
      }
      const id = messageId++
      const newMsg = {
        id,
        type,
        content,
        onClose
      }
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
