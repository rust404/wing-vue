import WButton from "./packages/button";
import WInput from './packages/input';
import WRow from './packages/row';
import WCol from './packages/col';
import WMessage from './packages/message';
import WTabs from './packages/tabs';
import WTooltip from './packages/tooltip';
import WCollapse from './packages/collapse';
const components = [WButton, WInput, WRow, WCol, WMessage, WTabs, WTooltip, WCollapse];

const install = function (Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
};

export { install as default, WButton, WInput, WRow, WCol, WMessage, WTabs, WTooltip, WCollapse };
