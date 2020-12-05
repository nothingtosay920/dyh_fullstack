import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods'
import Comment from '@/views/comment/comment'
import Seller from '@/views/sellers/sellers'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "goods",
    component: Goods
  },
  {
    path: '/comment',
    name: "comment",
    component: Comment
  },
  {
    path: '/seller',
    name: "seller",
    component: Seller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
