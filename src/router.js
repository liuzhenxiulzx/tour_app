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
      component: Home,
      children:[
        {
          path: '/index',
          name: 'index',
          meta:{
            title:'首页'
          },
          component: () => import('./views/index/index.vue')
        },
        {
          path: '/collection',
          name: 'collection',
          meta:{
            title:'收藏'
          },
          component: () => import('./views/collection/index.vue')
        },
        {
          path: '/release',
          name: 'release',
          meta:{
            title:'发布'
          },
          component: () => import('./views/release/index.vue')
        },
        {
          path: '/chat',
          name: 'chat',
          meta:{
            title:'聊天'
          },
          component: () => import('./views/chat/index.vue')
        },
        {
          path: '/myself',
          name: 'myself',
          meta:{
            title:'myself'
          },
          component: () => import('./views/myself/index.vue')
        },
      ]
    },
    {
      path: '/edit_personal',
      name: 'edit_personal',
      meta:{
        title:'个人资料编辑'
      },
      component: () => import('./views/myself/edit_personal.vue')
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
