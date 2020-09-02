import WButton from "./packages/button";
import WInput from './packages/input';
import WRow from './packages/row';
import WCol from './packages/col';
const components = [WButton, WInput, WRow, WCol];

const install = function (Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
};

export { install as default, WButton, WInput, WRow, WCol };