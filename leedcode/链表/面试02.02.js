var kthToLast = function(head, k) {
  const arr = []
  while (head) {
    if (!head) {
      return 
    }
    arr.push(head.val)
    head = head.next
  }
  return arr[arr.length -k]
};




