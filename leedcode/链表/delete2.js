// 给定一个排序链表 删除所有的含有重复数组的节点 只保留原始链表中没有重复出现的数字
// 1 > 2 > 3 > 3 > 4 > 4 > 5 // 1>2>5

// dummy节点 虚拟节点
const deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head
  }
  let dummy = new ListNode()
  // dummy 永远指向头节点
  dummy.next= head
  let cur = dummy
  while (cur.next !== null && cur.next.next !== null) {
    // cur后面有两个节点 对两个节点比较
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        // 删除
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next 
    }
  }
  return head
}