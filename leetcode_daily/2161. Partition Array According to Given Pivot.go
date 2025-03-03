func pivotArray(nums []int, pivot int) []int {
	var lessArr []int
	var greaterArr []int
	var equalArr []int
	for i := 0; i < len(nums); i++ {
		if nums[i] < pivot {
			lessArr = append(lessArr, nums[i])
		} else if nums[i] > pivot {
			greaterArr = append(greaterArr, nums[i])
		} else {
			equalArr = append(equalArr, nums[i])
		}
	}
	res := slices.Concat(lessArr, equalArr)
	res = slices.Concat(res, greaterArr)
	return res
}