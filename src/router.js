import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('./views/user/regist.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/user/login.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('./views/index/welcome.vue')
    }
  ]
})
