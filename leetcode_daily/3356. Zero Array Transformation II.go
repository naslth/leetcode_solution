package leetcodedaily

func minZeroArray(nums []int, queries [][]int) int {
	arr := make([]int, len(nums)+1)
	k, sum := 0, 0
	for i := 0; i < len(nums); i++ {
		for sum+arr[i] < nums[i] {
			k++
			if k > len(queries) {
				return -1
			}
			l, r, val := queries[k-1][0], queries[k-1][1], queries[k-1][2]
			if r >= i {
				arr[max(l, i)] += val
				arr[r+1] -= val
			}
		}
		sum += arr[i]
	}
	return k
}
