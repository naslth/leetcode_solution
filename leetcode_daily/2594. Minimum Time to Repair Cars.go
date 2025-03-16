package leetcodedaily

import "math"

func repairCars(ranks []int, cars int) int64 {
	var maxTime int64
	for _, rank := range ranks {
		maxTime = max(maxTime, int64(cars*cars*rank))
	}
	var l int64
	r := maxTime
	for l < r {
		mid := (l + r) / 2
		if canRepair(ranks, cars, mid) {
			r = mid
		} else {
			l = mid + 1
		}
	}
	return l
}

func canRepair(ranks []int, cars int, time int64) bool {
	maxCar := 0
	for _, rank := range ranks {
		maxCar += int(math.Sqrt(float64(int(time) / rank)))
	}
	return maxCar >= cars
}
