import Message from "./message.vue";
import './message.scss';
import {messageType} from './messageType';

Message.install = function(Vue) {
  Vue.component(Message.name, Message)

  const containerId = 'wing-message-container'
  const container = document.createElement('div')
  container.id = containerId
  document.body.appendChild(container)


  const Ctor = Vue.extend(Message)
  const instance = new Ctor().$mount('#' + containerId)

  const methods = messageType.reduce((acc, type) => {
    acc[type] = function ({content, duration, onClose}) {
      return instance.open({type, content, duration, onClose})
    }
    return acc
  }, {})

  Vue.prototype.$message = {
    open(config) {
      return instance.open(config)
    },
    ...methods
  }
}
export default Message;
