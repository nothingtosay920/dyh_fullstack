var findBottomLeftValue = function(root) {
  let maxDepth = -1;
  let record;
  function traverse(node, depth) {
    if (node === null) return;
    if (depth > maxDepth) {
      record = node.val;
      maxDepth = depth;
    }
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, 0);
  return record;
};

var findBottomLeftValue = function (root) {
  if (root === null) return 0;
  let queue = [];
  let res;
  queue.push(root);
  while (queue.length > 0) {
    let front = queue.shift();
    res = front.val;
    if (front.right) {
      queue.push(front.right);
    }
    if (front.left) {
      queue.push(front.left);
    }
  }
  return res;
};
