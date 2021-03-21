var swapPairs = function(head) {
  const arr = []
  let log = -1
  while (head) {
    log++
    if (arr[log]) {
      continue
    }
    next = head.next
    let value = head.val
    head.val = next.val
    next.val = value
    arr.push(true, true)
    head = next
  }
  return head
};

