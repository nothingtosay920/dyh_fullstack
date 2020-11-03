function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "hello "+ identify.call(this)
    console.log(greeting);
}

var me = {
    name: 'wn'
}

var you = {
    name: 'yangbao'
}

speak(me)