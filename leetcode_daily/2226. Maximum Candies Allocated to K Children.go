package leetcodedaily

func maximumCandies(candies []int, k int64) int {
	maxCandy := 0
	for _, candy := range candies {
		maxCandy = max(candy, maxCandy)
	}
	l, r := 0, maxCandy
	for l < r {
		mid := (l+r)/2 + 1
		if canDivide(candies, mid, k) {
			l = mid
		} else {
			r = mid - 1
		}
	}
	return l
}
func canDivide(candies []int, fixCandy int, k int64) bool {
	var maxChild int64
	for _, candy := range candies {
		maxChild += int64(candy / fixCandy)
	}
	return maxChild >= k
}
