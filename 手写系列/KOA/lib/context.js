

// ctx 怎么来的
let proto = {
  get url() {
    return defineGetter('request', 'url')
  }
}

function defineGetter(prop, name) {
  prop._deineGetter_(name, function() {
    return this[props][name]
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')


module.exports = proto