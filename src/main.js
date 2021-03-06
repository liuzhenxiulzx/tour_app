import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import Upload from 'element-ui';

import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as  qiniu from 'qiniu-js'
import VueJsonp from 'vue-jsonp'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueJsonp)
Vue.use(VueAxios, axios)
Vue.use(WeVue)
Vue.use(qiniu);
Vue.use(Upload);
// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://localhost:8999/api'
// axios.defaults.headers.post["Content-type"]="application/json";
// Vue.prototype.$axios=axios;
// php -S localhost:8999 -t public
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
