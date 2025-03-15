package leetcodedaily

func minCapability(nums []int, k int) int {
	maxValue := 0
	for _, num := range nums {
		maxValue = max(num, maxValue)
	}
	l, r := 0, maxValue
	for l < r {
		mid := (l + r) / 2
		if checkValid(nums, mid, k) {
			r = mid
		} else {
			l = mid + 1
		}
	}
	return l
}
func checkValid(nums []int, value int, k int) bool {
	numOfHouses := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] <= value {
			numOfHouses++
			i++
		}
	}
	return numOfHouses >= k
}
