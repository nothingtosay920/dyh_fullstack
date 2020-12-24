function a(b, c, d) {
  console.log(b+ c+ d);
  return console.log(this);
}


let args = [1 , 2, 3]
console.log(a.apply(1, args))
