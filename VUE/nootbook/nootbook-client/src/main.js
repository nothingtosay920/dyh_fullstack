import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 根据屏幕大小 设置字体大小
import axios from 'axios'
import { Swipe, SwipeItem, Toast } from 'vant';
import 'vant/lib/index.css';
import util from './assets/js/util'

Vue.use(Swipe).use(SwipeItem).use(Toast).use(axios);

Vue.config.productionTip = false

Vue.prototype.$http = axios 
Vue.prototype.$util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
