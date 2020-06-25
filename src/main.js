import Vue from "vue";
import router from "./router";
import Layout from "./components/Layout";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import BaseIcon from "./components/vueshow/BaseIcon.vue";
import "../src/assets/iconfont/iconfont.css";
import "../src/assets/iconfont/iconfont.js";
import "./plugins/element.js";
import store from "./store/store.js";
import "nprogress/nprogress.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  BaseIcon,
  store,
  ElementUI,

  render: h => h(Layout)
}).$mount("#app");