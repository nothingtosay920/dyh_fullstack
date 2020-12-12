import apiLogin from './interface/login'

const install = Vue => {
    Object.defineProperties(Vue.prototype, {
      $http: {
        get() {
          return Object.assign(
            {},
            apiLogin,
            // ...
          )
        }
      }
    })
}

export default install