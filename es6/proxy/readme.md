# defineProperty 和 Proxy 的区别
defineProperty只能定义属性的的读(get) 和 写(set),Proxy 可以的定义更多的行为

let proxy = new Proxy(target, handler)

target: 要拦截的目标对象
handler: 一个对象(做定制拦截的对象 类似defineProperty第三个参数)

