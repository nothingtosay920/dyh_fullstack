# 什么是前端路由
路由描述单页应用中url和ui直接的映射关系 这种映射关系是单向的 即url变化引起ui更新 而且不需要刷新页面
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

因为html5当中具备一个history对象 该对象中的pushState方法可以做法都向url后面拼接参数而不造成页面刷新 因为history对象中的popstate方法 支持我们监听url的变化 所以只需要a标签默认的跳转事件阻止掉 借助pushState方法模拟url的跳转能判断url变化动态决定渲染的UI