


// 3 0 2 -4
// 3 2 0 -4

var hasCycle = function(head) {
  let pre = head
  if (!head || !head.next) return false
  let curr = head.next.next
  while (curr && curr.next) {
    if (pre == curr) {
      return true
    }
    curr = curr.next.next
    pre = pre.next 
  }
  return false
};

var hasCycle = function(head) {
  try {
      JSON.stringify(head)
      return false
  } catch {
      return true
  }
};
// 注: JSON.stringify当在循环引用时会抛出异常
// TypeError ("cyclic object value")（循环对象值