var deleteNode = function(head, val) {
  if (head.val == val) return head.next
let pre = head, cur = head.next
while (cur != null && cur.val != val) {
  pre = cur
  cur = cur.next
}
if (cur != null) pre.next = cur.next
return head  
};

// 203同解法 203进阶版
var deleteNode = function(head, val) {
  let newHead = new ListNode( null )
  newHead.next = head
  if (head.val == val) return head.next
  let prev = newHead
  let cur = head
  while (cur) {
     if (cur.val === val) {
      prev.next = cur.next;
    }
    else {
      prev = cur;
    }
      cur = cur.next;
  }
  return newHead.next
};

