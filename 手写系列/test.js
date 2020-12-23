// main.js
const foo={
  name:'foo',
  getFoo(...args){
    console.log(this);
  }
}
const bar={
  name:'bar',
  getBar(...args){
    console.log(this);
  }
}
// foo.getFoo() //this=== {name: "foo", getFoo: ƒ} this.name== foo  ----------------------------------- ...args=====
// bar.getBar() //this=== {name: "bar", getBar: ƒ} this.name== bar  ----------------------------------- ...args=====
foo.getFoo.apply(bar,['测试传参','测试call'])
console.log("111111111111111111111111111111");
foo.getFoo.apply(null, foo.getFoo,['测试传参','测试call'])
