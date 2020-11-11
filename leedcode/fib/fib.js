// 0 1 1 2 3 5 8 13 21

function fib() {
    // 0n 表示换了一个类型 bigint
    let arr = [0n, 1n]
    if ( n <= 1) return arr[n] 
    for (let i = 0; i < n + 1; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
}