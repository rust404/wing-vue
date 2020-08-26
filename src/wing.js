import Button from "./packages/button";

const components = [
  Button
]

const install = function(Vue, options = {}) {
  components.forEach(component => {
    Vue.use(component)
  })
}

export default install
