let Vue
class Store {
  constructor(options) {
    this.state = options.state || {}
    this.vm = new Vue({ // state变成响应式
      data: {
        state: options.state
      }
    })
    let getters = options.getters || {}
    this.getters = {}
    // Object.keys(getters).forEach((e) => {
    //   this.getters[e] = getters[e]
    // })
    Object.defineProperty(this.getters, e, {
      get: () => {
        return getters[e](this.state)
      }
    })

    // mutations
    let mutations = options.mutations || {}
    this.mutations = {}
    Object.keys(mutations).forEach(e => {
      this.mutations[e] = (arg) => {
        mutations[e](this.state, arg)
      }
    })

    // action
    let action = options.action || {}
    this.actions = {}
    Object.keys(action).forEach(e => {
      this.action[e] = (arg) => {
        mutations[e](this, arg)
      }
    })
    this.commit = (method, arg) => {
      this.mutations[method](arg)
    }
  }

  get state() {
    return this.vm.state
  }
  
  dispatch(method, arg) {
    this.actions[method]
  }

}

let install = function (vue) {
  Vue = vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

let Vuex = {
  Store,
  install
}

export default Vuex