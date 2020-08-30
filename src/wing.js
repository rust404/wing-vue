import Button from "./packages/button";
import Icon from './packages/icon';
const components = [Button, Icon];

const install = function (Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
};

export { install as default, Button, Icon };
