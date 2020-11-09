let [a,b,c] = [1,2,3]
let [a,[b,c]] = [1,[2,3]]


// ...arguements

let [a,b,...c] = [1]
// c = []

let [a] = 1 // 不行 

let [x,y,z] = new Set(['a','b','c'])

let {log,sin,abs} = Math

const {log} = console

let {foo:baz} = {foo:'aaa', bar: 'bbb'}