// 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

// （这里，平面上两点之间的距离是欧几里德距离。）

// // 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。
// 输入：points = [[1,3],[-2,2]], K = 1
// 输出：[[-2,2]]
// 解释： 
// (1, 3) 和原点之间的距离为 sqrt(10)，
// (-2, 2) 和原点之间的距离为 sqrt(8)，
// 由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
// 我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    // 找到左边比基数大的数
    function partition(arr, left, right) {
        if (left > right) {
            return;
        }
        let i = left, j = right
        let privt = arr[left]
        function getPow(num) {
            return Math.pow(num[0], 1 * 2) + Math.pow(num[1], 1 * 2)
        }
        while (i < j) {
            while (getPow(arr[j]) >= getPow(privt) && i < j) {
                j--;
            }
            arr[i] = arr[j]
            while (getPow(arr[i]) <= getPow(privt) && i < j) {
                i++;
            }
            arr[j] = arr[i]
        }
        arr[i] = privt
        partition(arr, left, i - 1)
        partition(arr, i + 1, right)
    }
    partition(points, 0, points.length - 1)
    let lis = []
    for (let i =  0; i < K  ; i++) {
        lis.push(points[i])        
    }
    return lis
    // 2
    //  0 3 4 1 0
    //  0 3 4 1 3
    //  0 1 4 1 3
    //  0 1 4 4 3
    //  0 1 2 4 3
};
console.log(kClosest([[1,3],[-2,2]], 1));