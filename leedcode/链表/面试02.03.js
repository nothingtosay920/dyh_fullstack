var deleteNode = function(node) {
  let current = node;
  node.val = current.next.val;
  node.next = current.next.next;
};


