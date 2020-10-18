import { mount } from '@vue/test-utils'
import Collapse from '../collapse.vue'
import CollapsePanel from '../collapsepanel.vue'

describe('Collapse component', () => {
  let wrapper = null
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  it('should render panel header and content properly', () => {
    wrapper = mount({
      template: `
        <w-collapse v-model="a">
          <w-collapse-panel title="header1" name="1">content1</w-collapse-panel>
          <w-collapse-panel title="header2" name="2">content2</w-collapse-panel>
        </w-collapse>`,
      components: {[Collapse.name]: Collapse, [CollapsePanel.name]: CollapsePanel},
      data() {
        return {
          a: '1'
        }
      }
    })
    const headers = wrapper.findAll('.wing-collapse-panel-header')
    expect(headers.at(0).text()).toBe('header1')
    expect(headers.at(1).text()).toBe('header2')
    const contents = wrapper.findAll('.wing-collapse-panel-content')
    expect(contents.at(0).text()).toBe('content1')
    expect(contents.at(1).text()).toBe('content2')
    expect(contents.at(0).element).toBeVisible()
    expect(contents.at(1).element).not.toBeVisible()
  })
  it('should run v-model and display panel properly', async () => {
    wrapper = mount({
      template: `
        <w-collapse v-model="a">
          <w-collapse-panel title="header1" name="1">content1</w-collapse-panel>
          <w-collapse-panel title="header2" name="2">content2</w-collapse-panel>
        </w-collapse>`,
      components: {[Collapse.name]: Collapse, [CollapsePanel.name]: CollapsePanel},
      data() {
        return {
          a: '1'
        }
      }
    })
    await wrapper.vm.$nextTick()
    const headers = wrapper.findAll('.wing-collapse-panel-header')
    await headers.at(1).trigger('click')
    expect(wrapper.vm.a).toContain('2')
    let contents = wrapper.findAll('.wing-collapse-panel-content')
    expect(contents.at(1).element).toBeVisible()

    wrapper.vm.a = '1'
    await wrapper.vm.$nextTick()
    contents = wrapper.findAll('.wing-collapse-panel-content')
    expect(contents.at(1).element).not.toBeVisible()
  })
  it('should only show only one panel when accordion is true', async () => {
    wrapper = mount({
      template: `
        <w-collapse v-model="a" accordion>
          <w-collapse-panel title="header1" name="1">content1</w-collapse-panel>
          <w-collapse-panel title="header2" name="2">content2</w-collapse-panel>
        </w-collapse>`,
      components: {[Collapse.name]: Collapse, [CollapsePanel.name]: CollapsePanel},
      data() {
        return {
          a: '1'
        }
      }
    })
    await wrapper.vm.$nextTick()
    const headers = wrapper.findAll('.wing-collapse-panel-header')
    await headers.at(1).trigger('click')
    expect(wrapper.vm.a).toBe('2')
  })
})
