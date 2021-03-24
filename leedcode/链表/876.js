var middleNode = function(head) {
  let rh = 0
  let res = head
  let pre = head
  while (head) {
    if (!head) return
    rh++
    console.log(rh)
    if (rh % 2 == 0) {
      res = pre.next
      pre = pre.next
    }
    head = head.next
  }
  return res
};