import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import About from '../views/about'
import Home1 from '../views/home1'
import Home2 from '../views/home2'
import Detail from '@/views/Detail'

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
        component: About,
        beforeEnter: (to, from, next) => {
            console.log(to);
            console.log(from);
        }
    },
    {
        // path: '/detail:id',
        path: '/detail',
        name: '张三',
        component: Detail,
        // 重定向
        redirect: 'login',
        // 重新取路径名
        // alias: '/hello'
    }
]
const router = new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router;