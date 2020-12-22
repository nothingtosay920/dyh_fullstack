# 如何实现前端路由
1. url改变不引起页面刷新
2. 如何检测url的变化

# hash实现
通过hash改变url页面不刷新 原生js有个方法 监听hash值
改变url的操作:
1. 浏览器的前进后退按钮
2. <a></a>
3. window.location()


# history
pushState 和 replaceState

监听popstate事件 url是否变化

# 基于vue实现vue-router