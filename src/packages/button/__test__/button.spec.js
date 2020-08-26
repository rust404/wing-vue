import { shallowMount } from '@vue/test-utils'
import Button from '../button.vue'

describe('Button component', () => {
  it('should contain hello text', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.find('button').text()).toBe('hello')
  })
})
