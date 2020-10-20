function Person() {}
// Person是构造函数
Person.prototype.type = 'object named Person'
// Person.prototype是原型
console.log(Person.prototype)  // 对象
person = new Person()

// 检查person 是否为Person的实例
res = person instanceof Person
console.log(res)  // true
console.log(res.type) // object named Person

// 实例通过 __proto__ 访问原型
res = person.__proto__ == Person.prototype
console.log(res) // true
    
// 构造函数通过prototype访问原型，原型通过constructor访问构造函数
// constructor是一个属性 Constructor才是构造函数
res = Person.prototype.constructor === Person
console.log(res) // true

// 实例访问构造函数
res = person.__proto__.constructor === Person
console.log(res) // true

// 在读取一个实例的属性时，会循着原型链寻找
// 尝试获取自有属性
res = Reflect.ownKeys(person)
console.log(res) // []

// 原型同样可以通过 __proto__ 访问到原型的原型
function People() {}    
People.prototype = new Person()

p = new People()
res = [p instanceof Object, p instanceof Person, p instanceof People]
console.log(res) // [true, true, true]
res = p.type
console.log(res) // object named Person

// 原型链的搜索搜索到null为止

res = p.__proto__
console.log(res)
res = p.__proto__.__proto__
console.log(res)
res = p.__proto__.__proto__.__proto__
console.log(res)
res = p.__proto__.__proto__.__proto__.__proto__
console.log(res)