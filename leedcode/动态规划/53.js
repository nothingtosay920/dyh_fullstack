function LSS(list) {
    const len = list.length;
    let max = list[0];
    for (let i = 1; i < len; i++) {
      list[i] = Math.max(0, list[i - 1]) + list[i];
      if (list[i] > max) max = list[i];
    }
  
    return max;
  }
console.log(LSS([-1,0]));