import {mount} from '@vue/test-utils'
import Tooltip from '../tooltip.vue'

describe('Tooltip component', () => {
  let wrapper = null
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  it('should show when hover on reference element by default', async () => {
    document.body.innerHTML = '<div id="root"></div>'
    wrapper = mount({
      template: `
        <w-tooltip v-model="show" title="tooltip">
          <button id="reference">reference</button>
        </w-tooltip>
      `,
      components: {[Tooltip.name]: Tooltip},
      data() {
        return {show: false}
      }
    }, {
      attachTo: '#root'
    })
    await wrapper.vm.$nextTick()
    const reference = wrapper.find('#reference')
    const tooltipElm = document.querySelector('.wing-tooltip')
    expect(tooltipElm).not.toBeVisible()
    await reference.trigger('mouseenter')
    expect(tooltipElm).toBeVisible()
    await reference.trigger('mouseleave')
    await new Promise((r) => setTimeout(r, 400))
    expect(tooltipElm).not.toBeVisible()
  })
  it('should show when clicked if prop trigger is click', async () => {
    document.body.innerHTML = '<div id="root"></div>'
    wrapper = mount({
      template: `
        <w-tooltip v-model="show" trigger="click" title="tooltip">
          <button id="reference">reference</button>
        </w-tooltip>
      `,
      components: {[Tooltip.name]: Tooltip},
      data() {
        return {show: false}
      }
    }, {
      attachTo: '#root'
    })
    await wrapper.vm.$nextTick()
    const reference = wrapper.find('#reference')
    const tooltipElm = document.querySelector('.wing-tooltip')
    expect(tooltipElm).not.toBeVisible()
    await reference.trigger('click')
    expect(tooltipElm).toBeVisible()
    await reference.trigger('click')
    expect(tooltipElm).not.toBeVisible()
  })
  it('should show content in slot when slot is provided', async () => {
    document.body.innerHTML = '<div id="root"></div>'
    wrapper = mount({
      template: `
        <w-tooltip v-model="show" trigger="click" title="title">
          <button id="reference">reference</button>
          <template v-slot:content>slot content</template>
        </w-tooltip>
      `,
      components: {[Tooltip.name]: Tooltip},
      data() {
        return {show: false}
      }
    }, {
      attachTo: '#root'
    })
    await wrapper.vm.$nextTick()
    const tooltipElm = document.querySelector('.wing-tooltip')
    expect(tooltipElm.innerHTML).toContain('slot content')
    expect(tooltipElm.innerHTML).not.toContain('title')
  })
})
