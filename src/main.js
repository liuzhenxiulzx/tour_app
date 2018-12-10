import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import $ from 'jquery'
import 'bootstrap'

import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import { Swipe, SwipeItem,Tabs,Tab,Cell,Panel, MediaBox } from 'we-vue'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Tabs).use(Tab)
Vue.config.productionTip = false
Vue.use(WeVue)
Vue.use(Cell)
Vue.use(Panel).use(MediaBox)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
