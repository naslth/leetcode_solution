package leetcodedaily

import "sort"

func relativeSortArray(arr1 []int, arr2 []int) []int {
	res := []int{}
	map1 := make(map[int]int)
	res2 := []int{}
	for _, num1 := range arr1 {
		map1[num1]++

	}
	for _, num2 := range arr2 {
		for map1[num2] > 0 {
			res = append(res, num2)
			map1[num2]--
		}
	}
	for key, value := range map1 {
		if value > 0 {
			for value > 0 {
				res2 = append(res2, key)
				value--
			}
		}
	}
	sort.Ints(res2)
	res3 := append(res, res2...)
	return res3
}
