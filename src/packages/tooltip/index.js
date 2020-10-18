import Tooltip from "./tooltip.vue";
import './tooltip.scss';

Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip)
}
export default Tooltip;
