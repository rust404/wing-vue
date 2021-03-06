import Message from "./message.vue";
import './message.scss';
import {messageType} from './messageType';

Message.install = function(Vue) {
  Vue.component(Message.name, Message)

  function generateContainer() {
    const container = document.createElement('div')
    document.body.appendChild(container)
    return container
  }
  function mountInstance(instance) {
    const container = generateContainer()
    instance.$mount(container)
  }
  function isMounted() {
    return document.querySelector('.wing-message')
  }

  const Ctor = Vue.extend(Message)
  const instance = new Ctor()

  const methods = messageType.reduce((acc, type) => {
    acc[type] = function (config) {
      if (!isMounted()) {
        mountInstance(instance)
      }
      return instance.open({type, ...config})
    }
    return acc
  }, {})

  Vue.prototype.$message = {
    open(config) {
      if (!isMounted()) {
        mountInstance(instance)
      }
      return instance.open(config)
    },
    setConfig(config) {
      return instance.setConfig(config)
    },
    close(id) {
      return instance.close(id)
    },
    ...methods
  }
}
export default Message;
