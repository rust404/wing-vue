import { shallowMount, createLocalVue } from '@vue/test-utils'
import Plugin from '../index.js'

describe('Message component', () => {
  let localVue = null
  let wrapper = null
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
    localVue = createLocalVue()
    wrapper = shallowMount({
      template: '<div>test</div>',
    }, {
      attachTo: '#root',
      localVue
    })
  })
  afterEach(() => {
    document.body.innerHTML = ''
    wrapper.destroy()
  })
  it('should have container', async () => {
    localVue.use(Plugin)
    localVue.prototype.$message.success({content: 'hello'})
    await localVue.nextTick(() => {})
    expect(document.body.querySelector('.wing-message')).toBeTruthy()
  })
  it('should have render element in container when open', async () => {
    localVue.use(Plugin)
    localVue.prototype.$message.open({type: 'success', content: 'hello'})
    await localVue.nextTick(() => {})
    expect(document.body.querySelectorAll('.wing-message .wing-message-item').length).toBe(1)
  })
  it('message should be removed after 3000ms by default', async () => {
    localVue.use(Plugin)
    localVue.prototype.$message.success({content: 'success'})
    await localVue.nextTick(() => {})
    expect(document.body.querySelectorAll('.wing-message .wing-message-item').length).toBe(1)
    await new Promise((r) => setTimeout(r, 3100))
    expect(document.body.querySelectorAll('.wing-message .wing-message-item').length).toBe(0)
  })
  it('message should works fine with custom duration', async () => {
    localVue.use(Plugin)
    localVue.prototype.$message.success({content: 'success', duration: 1000})
    await localVue.nextTick(() => {})
    expect(document.body.querySelectorAll('.wing-message .wing-message-item').length).toBe(1)
    await new Promise((r) => setTimeout(r, 1100))
    expect(document.body.querySelectorAll('.wing-message .wing-message-item').length).toBe(0)
  })
  it('should run onClose after duration', async () => {
    localVue.use(Plugin)
    const onClose = jest.fn()
    localVue.prototype.$message.success({content: 'success', duration: 1000, onClose})
    await new Promise((r) => setTimeout(r, 1100))
    expect(onClose).toBeCalled()
  })
})
