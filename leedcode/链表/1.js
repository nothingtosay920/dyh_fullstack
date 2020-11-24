function reverseList(head) {
    let p = head
    let pre = null
    while (p) {
        // 本次循环 修改指向
        let next = p.next
        p.next = pre
        // 上面next修改完毕 走到下一个 修改一下个
        pre = p
        p = next

    }    
    return pre
}

var list = {
    val:1,
    next: {
        val: 2,
        next: {
            val: 3,
            next:{}
        }
    }
}

