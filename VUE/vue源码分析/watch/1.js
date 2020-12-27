// function a(b, c, d) {
//   console.log(b+ c+ d);
//   return console.log(this);
// }

// let args = [1 , 2, 3]
// console.log(a.apply(1, args))

// function toArray (list, start) {
//   start = start || 0;
//   var i = list.length - start;
//   var ret = new Array(i);
//   while (i--) {
//     // console.log(i);
//     // console.log(list[i + start]);
//     ret[i] = list[i + start];
//   }
//   return ret
// }

// const arr = [1, 2, 3, 4, 5]
// console.log(toArray(arr, 1));


// function a(params) {
//   console.log(arguments);
//   return params
// }

// function b(c, d) {
//   // console.log(arguments);
//   return c + d
// }

// a(b)()

// function a(v, args) {
//   // ...
// }
// Vue.use(a, 1,2)


const a = {
  b: 1,
  data: {
    c: undefined
  }
}
Object.defineProperty(a, 'c', {
  get: function () {
    return value
  }
})
a.c
console.log(a);