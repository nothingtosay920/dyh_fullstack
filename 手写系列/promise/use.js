function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('ok')
    }, 1000)
  })
  
}

function b() {
  setTimeout(() => {
    console.log('bbb');
  })
}

// a()
// b()

// a().then(b)