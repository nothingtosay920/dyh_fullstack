import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// vue.use() 的一个原则是use的对象 必须具备install这个方法

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
