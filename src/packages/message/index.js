import Message from "./message.vue";
import './message.scss';
import {messageType} from './messageType';

const containerId = 'wing-message-container'
Message.install = function(Vue) {
  Vue.component(Message.name, Message)

  function generateContainer() {
    const container = document.createElement('div')
    container.id = containerId
    document.body.appendChild(container)
    return container
  }
  function mountInstance(instance) {
    const container = generateContainer()
    instance.$mount(container)
  }
  function isMounted() {
    return document.querySelector(containerId)
  }

  const Ctor = Vue.extend(Message)
  const instance = new Ctor()

  const methods = messageType.reduce((acc, type) => {
    acc[type] = function (config) {
      if (!isMounted()) {
        mountInstance(instance)
        isMounted = true
      }
      return instance.open({type, ...config})
    }
    return acc
  }, {})

  Vue.prototype.$message = {
    open(config) {
      if (!isMounted()) {
        mountInstance(instance)
        isMounted = true
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
