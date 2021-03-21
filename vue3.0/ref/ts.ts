
// type Value<T> = T

// type numberValue = Value<Number>

function returnItem<T>(params: T): T {
  return params
}


function swap<T, U>(tuple: [T, U]): [U, T]{
  return [tuple[1], tuple[0]]
}

swap([7, '213'])


// function getArrayLength<T>(arg: Array<T>) {
//   console.log(arg.length);
//   return arg
// }

// getArrayLength([1, 2, 3])

type Value<T> = T

type numberValue = Value<Number>

// 反向推导
function create<T>(val: T): T {
  return val
}

let num: number
const c = create(num)

// 索引签名
type Test = {
  foo: number,
  bar: string
}

type N = Test['foo']

// 条件类型
type isNumber<T> = T extends number ? 'yes' : 'no'

type A = isNumber<2> // yes
type B = isNumber<'3'>  // no

type TypeName<T> = T extends string ? 'string' : 
T extends Boolean ? 'boolean' : 'object' 

type T0 = TypeName<string>

type Obj = {
  foo: number,
  bar: string
}

type Copy = {
  [k in keyof Obj]: Obj[k]
}