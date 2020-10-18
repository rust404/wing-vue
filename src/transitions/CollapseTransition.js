import {getStyle} from '../utils';

const mixin = {
  props: {
    name: String,
    tag: String
  },
  methods: {
    setStyle(el, options) {
      Object.keys(options).forEach(key => {
        el.style[key] = options[key]
      })
    },
    clearVerticalStyle(el) {
      this.setStyle(el, {
        height: '0px',
        marginTop: '0px',
        marginBottom: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        borderTopWidth: '0px',
        borderBottomWidth: '0px',
        overflow: 'hidden',
      })
    },
    resetVerticalStyle(el) {
      this.setStyle(el, {
        height: '',
        marginTop: '',
        marginBottom: '',
        paddingTop: '',
        paddingBottom: '',
        borderTopWidth: '',
        borderBottomWidth: '',
        overflow: '',
        transition: '',
      })
    },
    getVerticalStyle(el) {
      return {
        height: getStyle(el, 'height'),
        marginTop: getStyle(el, 'margin-top'),
        marginBottom: getStyle(el, 'margin-bottom'),
        paddingTop: getStyle(el, 'padding-top'),
        paddingBottom: getStyle(el, 'padding-bottom'),
        borderTopWidth: getStyle(el, 'border-top-width'),
        borderBottomWidth: getStyle(el, 'border-bottom-width'),
        overflow: 'hidden',
      }
    },
    enter(el) {
      const verticalStyle = this.getVerticalStyle(el)
      this.clearVerticalStyle(el)
      setTimeout(() => {
        el.style.transition = `all 300ms`
        this.setStyle(el, verticalStyle)
      }, 0)
    },
    leave(el) {
      const verticalStyle = this.getVerticalStyle(el)
      this.setStyle(el, verticalStyle)
      setTimeout(() => {
        el.style.transition = `all 300ms`
        this.clearVerticalStyle(el)
      }, 0)
    },
    afterLeave(el) {
      this.resetVerticalStyle(el)
    }
  }
}
export const CollapseTransition = {
  name: 'CollapseTransition',
  mixins: [mixin],
  render(h) {
    return h('transition', {
      props: {
        name: this.name,
        tag: this.tag,
      },
      on: {
        enter: this.enter,
        leave: this.leave,
        afterLeave: this.afterLeave
      }
    }, this.$slots.default)
  }
}
export const CollapseTransitionGroup = {
  name: 'CollapseTransitionGroup',
  mixins: [mixin],
  render(h) {
    return h('transition-group', {
      props: {
        name: this.name,
        tag: this.tag,
        appear: true
      },
      on: {
        enter: this.enter,
        leave: this.leave,
        afterLeave: this.afterLeave
      }
    }, this.$slots.default)
  }
}
