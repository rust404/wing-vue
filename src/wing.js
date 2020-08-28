import Button from "./packages/button";

const components = [
  Button
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

export {
  install as default,
  Button
}
