import Vue from 'vue'
import VueRouter from 'vue-router'
import StarLogin from '@/views/login/StarLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/StarLogin',
    name: "StarLogin",
    component: StarLogin,
    meta: {
      title: '登录'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
