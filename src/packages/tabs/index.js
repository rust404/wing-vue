import Tabs from "./tabs.vue";
import TabPane from "./tabpane.vue";
import './tabs.scss';

Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabPane.name, TabPane)
}
export default Tabs;
