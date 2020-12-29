let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github')
  let r2 = yield fetch('https://api.github.com/users/github/followers')
  let r3 = yield fetch('https://api.github.com/users/github/repos')

  console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
}

// let g = gen()
// let result1 = g.next()
// result1.value.then(function(data) {
//   return data.json()
// }).then(function(data) {
//   // console.log(g.next(data).value);
//   return g.next(data).value
// }).then(function (data) {
//   return data.json()
// }).then(function () {
//   return g.next(data).value
// }).then(function (data) {
//   return data.json()
// }).then(function (data) {
//   g.next(data)
// })

function run(gen) {
  let g = gen()
  function next(data) {
    let result = g.next(data)
    if (result.done) return
    result.value.then(function(data) {
      next(data)
    })
  }
  next()
}