import Tabs from "./tabs.vue";
import TabPane from "./tabspane.vue";
import './tabs.scss';

Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsPane.name, TabPane)
}
export default Tabs;
