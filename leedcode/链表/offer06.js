



var reversePrint = function(head) {
  const stack = [],res = [];
  let p = head,t = 0;
  while(p){
      stack.push(p.val);
      t ++;
      p = p.next;
  }
  for(let i = 0;i < t;i ++){
      res.push(stack.pop());
  }
  return res;
};