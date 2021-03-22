const swapPairs = (head) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const next = head.next; // 临时保存head.next，因为head.next待会要改变
    head.next = next.next;
    next.next = head;
    prev.next = next;  

    prev = head;      // 指针更新
    head = head.next; // 指针更新
  }
  return dummy.next;
};

// 难