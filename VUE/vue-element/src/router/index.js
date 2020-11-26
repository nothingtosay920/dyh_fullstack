import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import About from '../views/about'
import Home1 from '../views/home1'
import Home2 from '../views/home2'


Vue.use(Router)
// 对象必须包含path 名称 页面
// 配置子路由不要写斜杠
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                component: Home1
            },
            {
                path: 'home1',
                component: Home1
            },
            {
                path: 'home2',
                component: Home2
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]
const router = new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router;