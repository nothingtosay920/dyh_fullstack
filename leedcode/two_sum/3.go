// js 动态语言
// twoSum undefinded => functon
// go 类型约束 现代的C语言
func twoSum(nums []int, target int) []int  {
	//O(n^2) => O(n)
	// json 7
	//hashTable {7:0,}
	h := make(map[int]int) // hashTalbe
	// 
	for i,value := range nums {
		if wanted, ok := h[value] ; ok {
			return []int{wanted, i}
		}else {
			h[target-value] = i
		}
	}	
	return nil
}