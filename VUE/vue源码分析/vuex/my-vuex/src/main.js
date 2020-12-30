import Vue from 'vue'
import App from './App.vue'
import sotre from './store'

Vue.config.productionTip = false

new Vue({
  sotre,
  render: function (h) { return h(App) }
}).$mount('#app')
