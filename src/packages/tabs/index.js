import Tabs from "./tabs.vue";
import TabsPane from "./tabspane.vue";
import './tabs.scss';

Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsPane.name, TabsPane)
}
export default Tabs;
