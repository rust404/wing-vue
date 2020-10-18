import Collapse from "./collapse.vue";
import CollapsePanel from "./collapsepanel.vue";
import './collapse.scss';

Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapsePanel.name, CollapsePanel)
}
export default Collapse;
