import { shallowMount } from '@vue/test-utils'
import Button from '../button.vue'

describe('Button component', () => {
  it('should be a button', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.find('button')).toBeTruthy()
  })
  it('should render text properly', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Test'
      }
    })
    expect(wrapper.text()).toBe('Test')
  })
  it('should render type properly', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'primary'
      },
      slots: {
        default: 'Test'
      }
    })
    expect(wrapper.classes()).toContain('wing-btn-primary')
  })
  it('should render size properly', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        size: 'lg'
      },
      slots: {
        default: 'Test'
      }
    })
    expect(wrapper.classes()).toContain('wing-btn-lg')
  })
  it('should render disabled button properly', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      },
      slots: {
        default: 'Test'
      }
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })
  it('should have spinner icon when loading', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        loading: true
      },
      slots: {
        default: 'Test'
      }
    })
    const loadingIcon = wrapper.findComponent({name: 'spinner'})
    expect(loadingIcon.exists()).toBe(true)
  })
})
