function a(params) {
  (function() {
    if (typeof name == 'undefined') {
      var name = 'jack'
      console.log('gooble' + name);
    } else {
      console.log('hello' + name);
    }
  })()
  var name = 'Word!'

}

