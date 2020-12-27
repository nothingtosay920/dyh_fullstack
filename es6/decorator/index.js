
// @annotation
// class MyClass {

// }

// function annotation(target) {
//     target.annotated = true
// }

class MyClass {
    @readonly
    @unenumberable
    method() {}
}

function readonly(target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

function unenumberable(target, name, descriptor) {
    descriptor.enumberable = false
    return descriptor
}