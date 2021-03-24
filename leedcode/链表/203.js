

var removeElements = function(head, val) {
  let newHead = new ListNode( null ),
      prev = newHead,
      curr = head;
      newHead.next = head;
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    }
    else {
      prev = curr;
    }
      curr = curr.next;
  }
  return newHead.next;
};