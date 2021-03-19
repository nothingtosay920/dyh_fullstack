// 四数之和

var fourSum = function(nums, target) {
  const res = []
  if (!nums.length) {
    return res
  }
  const arr = nums.sort((a, b) =>  a - b)

  let lf = 0
  let rh = nums.length - 1
  while (lf < rh - 3) {
    let newTarget = nums[lf] + nums[rh] - target
    let newLf = lf + 1
    let newRh = rh - 1
    while (newLf < newRh) {
      if (newTarget == nums[newLf] + nums[newRh]) {
        let ar = []
        ar.push(nums[lf], nums[rh], nums[newLf], nums[newRh])
        res.push(ar)
      } else if (newTarget < nums[newLf] + nums[newRh]) {
        newLf++
      } else {
        newRh--
      }
      newLf++
      newRh--
    }
    rh--
  }
  if (target==nums[lf] + nums[rh] + nums[newLf]+ nums[newRh]) {
    let ar = []
    ar.push(nums[lf], nums[rh], nums[newLf], nums[newRh])
    res.push(ar)
  }
  return res
};
