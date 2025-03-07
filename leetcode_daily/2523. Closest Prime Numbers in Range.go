package leetcodedaily

import "math"

func closestPrimes(left int, right int) []int {
	arr := make([]bool, right+1)
	for i := 2; i <= right; i++ {
		arr[i] = true
	}
	for i := 2; i*i <= right; i++ {
		if arr[i] == true {
			for j := i * i; j <= right; j += i {
				arr[j] = false
			}
		}
	}
	res := make([]int, 0)
	check := make([]int, 0)
	minL := math.MaxInt
	for i := left; i <= right; i++ {
		if arr[i] == true {
			if len(res) == 2 {
				check[0] = check[1]
				check[1] = i
				min := check[1] - check[0]
				if min < minL {
					res[0] = check[0]
					res[1] = check[1]
					minL = min
				}
			} else {
				check = append(check, i)
				res = append(res, i)
				if len(res) == 2 {
					minL = res[1] - res[0]
				}
			}
		}
	}
	if len(res) < 2 {
		return []int{-1, -1}
	}
	return res
}
