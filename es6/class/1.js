

// class Foo {
//     static bar() {
//         this.baz()
//         console.log(123);
//     }
//     static baz() {
//         console.log(234);
//     }
// }
// let foo = new Foo()
// Foo.bar()
// foo.bar()

class Shape {
    constructor (width, height) {
        this._width = width
        this._height = height
        // this.area = width * height
    }
    get area() {
        console.log(123);
    }
}

const square = new Shape(10)
console.log(square.area);