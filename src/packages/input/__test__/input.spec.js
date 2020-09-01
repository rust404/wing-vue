import {mount, shallowMount} from '@vue/test-utils'
import Input from '../input.vue'

describe('Input component', () => {
  let wrapper = shallowMount(Input)
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
    }
  })
  it('should work properly with v-model', async () => {
    wrapper = mount({
      template: `
        <w-input v-model="test"/> `,
      components: {
        WInput: Input
      },
      data() {
        return {
          test: ''
        }
      }
    })
    await wrapper.setData({test: '123'})
    expect(wrapper.find('input[type=text]').element.value).toBe('123')
    await wrapper.find('input[type=text]').setValue('456')
    expect(wrapper.vm.test).toBe('456')
  })
  it('should render properly with different size', () => {
    wrapper = shallowMount(Input, {
      propsData: {
        size: 'lg'
      }
    })
    expect(wrapper.classes()).toContain('wing-input-lg')
  })
  it('should have prefix/suffix icon when prefix/suffix is provided', () => {
    wrapper = shallowMount(Input, {
      slots: {
        prefix: 'prefix-icon',
        suffix: 'suffix-icon'
      }
    })
    expect(wrapper.find('.wing-input-prefix').exists()).toBe(true)
    expect(wrapper.find('.wing-input-suffix').exists()).toBe(true)
  })
  it('should have prepend/append element when prepend/append is provided', () => {
    wrapper = shallowMount(Input, {
      slots: {
        prepend: 'prepend',
        append: 'append'
      }
    })
    expect(wrapper.find('.wing-input-prepend').exists()).toBe(true)
    expect(wrapper.find('.wing-input-append').exists()).toBe(true)
  })
  it('should trigger events properly', async () => {
    const events = ['change', 'blur', 'focus']
    const listeners = events.reduce((acc, event) => {
      acc[event] = jest.fn()
      return acc
    },{})
    const pressEnterEvent = jest.fn()
    wrapper = shallowMount(Input, {
      listeners: {
        ...listeners,
        'press-enter': pressEnterEvent
      }
    })
    for (let event of events) {
      await wrapper.find('input[type=text]').trigger(event, {
        value: event
      })
      expect(listeners[event]).toBeCalledWith(expect.objectContaining({
        value: event
      }))
    }
    await wrapper.find('input[type=text]').trigger('keypress', {
      keyCode: 13
    })
    expect(pressEnterEvent).toHaveBeenCalled()
  })
  it('should render properly when disabled', () => {
    wrapper = shallowMount(Input, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.find('.wing-input-main').classes()).toContain('is-disabled')
  })
  it('should not call events when disabled', async () => {
    const events = ['change', 'blur', 'focus']
    const handler = jest.fn()
    const listeners = events.reduce((acc, event) => {
      acc[event] = handler
      return acc
    },{})
    wrapper = shallowMount(Input, {
      propsData: {
        disabled: true
      },
      listeners: {
        ...listeners,
        'press-enter': handler
      }
    })
    for (let event of events) {
      await wrapper.find('input[type=text]').trigger(event)
    }
    await wrapper.find('input[type=text]').trigger('keypress', {
      keyCode: 13
    })
    expect(handler).not.toHaveBeenCalled()
  })
  it('should clear when clear button click', async () => {
    wrapper = mount({
      template: `
        <w-input v-model="test" allow-clear/> `,
      components: {
        WInput: Input
      },
      data() {
        return {
          test: 'clear'
        }
      }
    })
    const icon = wrapper.find('.clear-icon')
    expect(icon.element).toBeVisible()
    expect(wrapper.vm.test).toBe('clear')
    await icon.trigger('click')
    expect(wrapper.vm.test).toBe('')
    expect(icon.element).not.toBeVisible()
  })
})
