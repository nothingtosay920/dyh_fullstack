

// const count = reactive({
//   value: 2
// })

// { value: T }  ref

const count = ref(2) 
const num = ref(count)
num.value = 3

// vue 会进行解包从而获得最里层的

// ref(ref(ref(2)))
// count.value