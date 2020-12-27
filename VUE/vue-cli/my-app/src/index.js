import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.comfig.produtionTip = false

// new Vue({
//   el: '#app',
//   teplate: '<App/>',
//   components: { App }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')