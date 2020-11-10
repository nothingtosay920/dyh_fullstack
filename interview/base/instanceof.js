// let arr = []
// arr instaceof Array
function instance_of(L, R) {
    L = L.__proto__
    let o = R.prototype
    while (true) {
        if (L === null) return false
        if (o === L) return true
        L = L.__proto__
    }
}

console.log(Array);