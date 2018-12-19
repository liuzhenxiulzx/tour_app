import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import $ from 'jquery'
import 'bootstrap'

import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


import { Swipe, SwipeItem,DatetimePicker,Progress ,Button ,Tabs,Tab,Cell,Panel, MediaBox,SearchBar,Badge  } from 'we-vue'

Vue.use(VueAxios, axios)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Tabs).use(Tab)
Vue.use(WeVue)
Vue.use(Cell)
Vue.use(Panel).use(MediaBox)
Vue.use(SearchBar)
Vue.use(Badge)
Vue.use(Button)
Vue.use(Progress)
Vue.use(DatetimePicker)

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://localhost:8999/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
