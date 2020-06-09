import Vue from 'vue'
import router from './router'
import Layout from './components/Layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,

  render: h => h(Layout)
}).$mount("#app")