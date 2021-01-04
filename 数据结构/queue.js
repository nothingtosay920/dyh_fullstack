// push shift

const queue = []
queue.push('a')
queue.push('b')
queue.push('c')
queue.push('d')

while (queue.length) {
  const top = queue[0]
  queue.shift()
}

// 链表
function ListNode(val) {
  this.val = val
  this.next = null
}

// 增加
const node1 = new ListNode(1)
node1.next = new ListNode(2)
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// [1, 3, 2]
// 删除
node1.next = node3.next

const arr = [1, 2, 3, 4] // 同种数据类型 增加删除是 O(n)
// 数组
const arr = ['haha', 1, {a: 1}] // 不同种 不是O(n)
// 链表


// 差别 数组是连续存储 可以通过索引拿到 链表是离散存储 需要从头部遍历拿到

const index = 10
let node = head

for (let i = 0; i < index && node; i++) {
  node = node.next  
}