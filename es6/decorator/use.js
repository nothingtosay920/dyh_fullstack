class Math {
  @log
  add (a, b) {
    return a + b
  }
}

function log(target, name, decriptor) {
  let oldValue = decriptor.value

  decriptor.value = function (...args) {
    console.log(`Calling ${name} with`, args);
    return oldValue.apply(this, args)
  }
  return decriptor
}
let math = new Math()
console.log(math.add(2, 4));