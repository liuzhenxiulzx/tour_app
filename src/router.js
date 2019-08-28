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
      name: '',
      component: Home,
      children:[
        {
          path: '',
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
          component: () => import('./views/chat/index.vue'),
        },
        {
          path: '/myself',
          name: 'myself',
          meta:{
            title:'myself'
          },
          component: () => import('./views/myself/index.vue'),
        },
        {
          path: '/privatenews',
          name: 'privatenews',
          meta:{
            title:'私信'
          },
          component: () => import('./views/chat/privatenews.vue')
        }
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
    },
    {
      path: '/privatechat',
      name: 'privatechat',
      meta:{
        title:'私聊'
      },
      component: () => import('./views/chat/privatechat.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      meta:{
        title:'文章详情'
      },
      component: () => import('./views/index/details.vue')
    },
    {
      path: '/followme',
      name: 'followme',
      meta:{
        title:'关注我的人'
      },
      component: () => import('./views/myself/followme.vue')
    },
    {
      path: '/myfollow',
      name: 'myfollow',
      meta:{
        title:'我关注的人'
      },
      component: () => import('./views/myself/myfollow.vue')
    },
    {
      path: '/myarticle',
      name: 'myarticle',
      meta:{
        title:'我的作品'
      },
      component: () => import('./views/myself/myarticle.vue')
    },
    
  ]
})
