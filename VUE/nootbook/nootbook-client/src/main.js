import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 根据屏幕大小 设置字体大小
import axios from 'axios'
import { Swipe, SwipeItem, Toast } from 'vant';
import 'vant/lib/index.css';
import util from './assets/js/util'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(Swipe).use(SwipeItem).use(Toast);
Vue.config.productionTip = false
Vue.prototype.$http = axios 
Vue.prototype.$util = util

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
