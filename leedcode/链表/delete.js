// 链表的删除


// 给定一个排序的列表 删除所有重复的元素 使得每个元素只出现一次
let deleteDuplicates = function (head) {
  // 设定cur指针 初始值为链表的第一个节点
  let cur = head
  // 遍历列表
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next 
    }
  }
  return head
} 


