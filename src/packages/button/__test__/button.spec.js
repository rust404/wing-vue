import { shallowMount } from '@vue/test-utils'
import Button from '../button.vue'

describe('Button component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.find('button')).toBeTruthy()
  })
})
