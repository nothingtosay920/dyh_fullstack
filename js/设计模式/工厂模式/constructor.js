// 变与不变的原则
const ceo = {
  name: 'ceo',
  age: 20,
  carrer: 'coder'
}


function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
}

function Coder() {
  // ...
}

function ProductManger() {
  // ...
}
const user = new User(name, age, career)


function Factory(name, age, career) {
  let work
  switch (career) {
    case 'coder':
      work = ['...']
      break
    case 'product manager':
      work = ['...']
      break
  }
  return new User(name, age, work)
}