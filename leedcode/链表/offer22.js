


var getKthFromEnd = function(head, k) {
  let slow = fast = head // 快、慢指针起始位置
  while (fast) {
      fast = fast.next

      if (k-- <= 0) { // 当走过k步 之后慢指针开始启动
          slow = slow.next
      }
  }
  return slow
};