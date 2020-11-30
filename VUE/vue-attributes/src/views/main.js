import Vue from 'vue'
import App from './App.vue'
import router from './router'
// minxin放到组件或是页面 minxins放到全局
Vue.mixin({
    beforeUpdate () {
        console.log(456);
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')