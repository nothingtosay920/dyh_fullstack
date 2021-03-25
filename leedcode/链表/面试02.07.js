

// 同52
var getIntersectionNode = function(headA, headB) {
  var h1 = headA;
  var h2 = headB;

  while(h1 !== h2){ // 如果相交、或者没有相交
      h1 = h1 === null ? headB: h1.next; // h1结束 接入对方
      h2 = h2 === null ? headA: h2.next;  // h2结束 接入对方
  }

  return h1;
};