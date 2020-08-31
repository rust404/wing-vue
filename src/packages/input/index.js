import Input from "./input.vue";
import './input.scss';

Input.install = function(Vue) {
  Vue.component(Input.name, Input)
}
export default Input;
  