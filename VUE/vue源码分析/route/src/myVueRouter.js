let Vue = null
class HistoryRoute {
  constructor () {
    this.current = null
  }
}
// 目标 创建2个组件 给到vue 要使用Vue.mixin将插件混入每一个vue实例中
// 需要判断两种模式


class VueRouter {
  constructor (options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)
    this.history = new HistoryRoute()
    this.init()
  }
  // 初始化
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/';
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/';
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component
      return pre
    }, {})
  }
}

VueRouter.install = function(v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      // 取当前组件存在并且上面具备一个router的话 是根组件
      if (this.$options && this.$options.router) {
        this._root = this
        this._router = this.$options.router

        // 让某个对象变成响应式
        Vue.util.defineReactive(this, 'xxx', this._router.history)
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      Object.defineProperty(this, '$router', {
        get () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get () {
          return this._root._router.history.current
        }
      })
    }
  })
  // 定义两个组件 
  Vue.component('router-link', {
    // 编译模板
    props: {
      to: String
    },
    render(h) {
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    // 编译模板
    render(h) {
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}


export default VueRouter

// class Vue {
//   constructor() {
//     _installedPlugins: ''
//   }
// }

// Vue.use = function (plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins == []))
//   if (installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   const args = toArray(arguments, 1)
//   args.unshift(this)
//   if (typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === 'function') {
//     plugin.apply(null, args)
//   }
//   installedPlugins.push(plugin)
//   return this
// }


// export function toArray (list: any, start?: number): Array<any> {
//   start = start || 0
//   let i = list.length - start
//   const ret: Array<any> = new Array(i)
//   while (i--) {
//     ret[i] = list[i + start]
//   }
//   return ret
// }

// 1. 未注册过 则_installedPlugins为空 赋值一个空数组用来存储 然后就要进行注册
// 2. _installedPlugins中已经有值 需要用indexOf判断当前注册的插件是否已经注册过 已经注册就return 当前的vue 没有注册就要进行注册
// 3. 注册插件需要调用插件的install方法 如果插件是个obj 就执行对象的install方法并且调用apply方法 将this指向插件传入参数



/** 
 * Vue.use 用来注册插件 插件可能是 func 和 object 将当前Vue实例交给插件的install方法
 * 在Vue的构造函数中存入_installedPlugins用来存储已经注册的插件 默认存入空字符串 用来在之后判断_installedPlugins是否为空
 * 当每次调用use时,都要取到_installedPlugins来知道已经注册的插件有哪些 
 * 如果_installedPlugins为空 则赋值一个空数组用来存储
 *  */ 