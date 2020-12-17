import Vue from 'vue'
import VueRouter from 'vue-router'
import StarLogin from '@/views/login/StarLogin'
import StarRegister from '@/views/register/index'
import noteClass from '@/views/noteClass/index'
import noteList from '@/views/noteList/index'
import noteDetail from '@/views/noteDetail/index'
import noteEdit from '@/views/noteEdit/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/StarLogin'
  },
  {
    path: '/StarLogin',
    name: "StarLogin",
    component: StarLogin,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/starRegister',
    name: "starRegister",
    component: StarRegister,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: noteClass
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: noteList
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: noteDetail
  },
  {
    path: '/noteEdit',
    name: 'noteEdit',
    component: noteEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
