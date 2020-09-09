import {mount} from '@vue/test-utils'
import Tabs from '../tabs.vue'
import TabsPane from '../tabspane.vue'

describe('Tabs component', () => {
  let wrapper = null
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  it('should render label and content properly by default', async () => {
    wrapper = mount({
      template: `
        <w-tabs v-model="a">
        <w-tabs-pane label="tab1" tabKey="1">tab1 content</w-tabs-pane>
        <w-tabs-pane label="tab2" tabKey="2">tab2 content</w-tabs-pane>
        </w-tabs>`,
      components: {[Tabs.name]: Tabs, [TabsPane.name]: TabsPane},
      data() {
        return {a: '1'}
      }
    })
    await wrapper.vm.$nextTick()
    const tabBtns = wrapper.findAll('.wing-tabs-btn')
    expect(tabBtns.at(0).text()).toBe('tab1')
    expect(tabBtns.at(1).text()).toBe('tab2')

    const tabPanes = wrapper.findAll('.wing-tabs-pane')
    expect(tabPanes.at(0).text()).toBe('tab1 content')
    expect(tabPanes.at(1).text()).toBe('tab2 content')
    expect(tabPanes.at(0).classes()).toContain('is-active')
    expect(tabPanes.at(1).classes()).not.toContain('is-active')
  })
  it('should run v-model properly', async () => {
    wrapper = mount({
      template: `
        <w-tabs v-model="a">
        <w-tabs-pane label="tab1" tabKey="1">tab1 content</w-tabs-pane>
        <w-tabs-pane label="tab2" tabKey="2">tab2 content</w-tabs-pane>
        </w-tabs>`,
      components: {[Tabs.name]: Tabs, [TabsPane.name]: TabsPane},
      data() {
        return {a: '1'}
      }
    })
    await wrapper.vm.$nextTick()
    const tabBtns = wrapper.findAll('.wing-tabs-btn')
    const tabPanes = wrapper.findAll('.wing-tabs-pane')

    await tabBtns.at(1).trigger('click')
    expect(wrapper.vm.a).toBe('2')
    expect(tabBtns.at(1).classes()).toContain('is-active')
    expect(tabPanes.at(1).classes()).toContain('is-active')
  })
  it('should trigger event properly', async () => {
    const onTabClick = jest.fn()
    const onChange = jest.fn()
    wrapper = mount({
      template: `
        <w-tabs v-model="a" @tab-click="onTabClick" @change="onChange">
        <w-tabs-pane label="tab1" tabKey="1">tab1 content</w-tabs-pane>
        <w-tabs-pane label="tab2" tabKey="2">tab2 content</w-tabs-pane>
        </w-tabs>`,
      components: {[Tabs.name]: Tabs, [TabsPane.name]: TabsPane},
      data() {
        return {a: '1'}
      },
      methods: {onTabClick, onChange}
    })
    await wrapper.vm.$nextTick()
    const tabBtns = wrapper.findAll('.wing-tabs-btn')
    await tabBtns.at(0).trigger('click', {name: 'click'})
    expect(onTabClick).toBeCalledWith(expect.objectContaining({name: 'click'}), '1')
    expect(onChange).not.toBeCalled()

    await tabBtns.at(1).trigger('click', {name: 'click'})
    expect(onTabClick).toBeCalledWith(expect.objectContaining({name: 'click'}), '2')
    expect(onChange).toBeCalledWith('2')
  })
  it('should run disabled properly', async () => {
    const onTabClick = jest.fn()
    const onChange = jest.fn()
    wrapper = mount({
      template: `
        <w-tabs v-model="a" @tab-click="onTabClick" @change="onChange">
        <w-tabs-pane label="tab1" tabKey="1">tab1 content</w-tabs-pane>
        <w-tabs-pane disabled label="tab2" tabKey="2">tab2 content</w-tabs-pane>
        </w-tabs>`,
      components: {[Tabs.name]: Tabs, [TabsPane.name]: TabsPane},
      data() {
        return {a: '1'}
      },
      methods: {onTabClick, onChange}
    })
    await wrapper.vm.$nextTick()
    const tabBtns = wrapper.findAll('.wing-tabs-btn')
    await tabBtns.at(1).trigger('click', {name: 'click'})
    expect(onTabClick).not.toBeCalled()
    expect(onChange).not.toBeCalled()

  })
  it('should run custom label properly', async () => {
    wrapper = mount({
      template: `
        <w-tabs v-model="a">
        <w-tabs-pane label="tab1" tabKey="1">tab1 content</w-tabs-pane>
        <w-tabs-pane label="tab2" tabKey="2">
          tab2 content
          <template v-slot:label>
            <div id="custom">custom label<</div>
          </template>
        </w-tabs-pane>
        </w-tabs>`,
      components: {[Tabs.name]: Tabs, [TabsPane.name]: TabsPane},
      data() {
        return {a: '1'}
      },
    })
    await wrapper.vm.$nextTick()
    const customLabel = wrapper.find('#custom')
    expect(customLabel.element).toBeVisible()
  })
})
