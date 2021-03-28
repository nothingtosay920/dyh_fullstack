let deepCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return
  // 根据obj的类型判断是新建一个数组还是对象
  let new_obj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        new_obj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
    return new_obj
  }
}


function deepClone(source){
  const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for(let keys in source){ // 遍历目标
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){ // 如果值是对象，就递归一下
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      }else{ // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      }
    } 
  }
  return targetObj;
}


// concat 不会修改原数组 返回一个新数组 concat 只是对数组的第一层进行深拷贝
// slice 同上
// Object.assign()
// ...
// 赋值运算符 = 实现的是浅拷贝，只拷贝对象的引用值；
// JavaScript 中数组和对象自带的拷贝方法都是“首层浅拷贝”；
// JSON.stringify 实现的是深拷贝，但是对目标对象有要求；
// 若想真正意义上的深拷贝，请递归。