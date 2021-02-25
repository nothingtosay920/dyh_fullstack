let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'black',
      age: 3
    },
    cat: {
      color: 'white',
      age: 2
    }
  }
}

function copy (src) {
  let dest
  // 实现拷贝代码 




  return dest
}

let jack2 = copy(jack)
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color); // black