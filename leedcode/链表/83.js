



var deleteDuplicates = function(head) {
  let pre = {}
  const res = head
  while (head) {
    if (pre.val == head.val) {
      head = head.next
      pre.next = head
    } else {
      pre = head
      head = head.next
    }
  }
  return res
};