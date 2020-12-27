function a() {
  return new Promise((resolve, reject) => {
      resolve('ok')
  })
}
a().then(123)