function isOdd(num) {
  return num % 2 == 1
}

function isEven(num) {
  return num % 2 == 0
}

function isSance(num) {
  return isEven(num) || isOdd(num)
}

var values = [7, 4, '13', -9, Infinity]