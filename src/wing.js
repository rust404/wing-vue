import Button from "./packages/button";
import Input from './packages/input';
const components = [Button, Input];

const install = function (Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
};

export { install as default, Button };