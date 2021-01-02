function Parent() {
  this.names = ['jiushen', 'ceo']
}

// Parent.prototype.getName = function () {
//   console.log(this.name);
// }

Child.prototype = new Parent()
function Child() {
  
}
let child1 = new Child()
child1.names.push('cong')
// 木得复用 
// 避免了引用类型的属性被所有实例共享