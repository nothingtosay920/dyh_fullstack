function a(b, c, d) {
  return b + c + d
}
const args = [1 , 2, 3]
console.log( a.apply(null, args));
