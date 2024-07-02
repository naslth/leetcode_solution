func intersect(nums1 []int, nums2 []int) []int {
	temp := make(map[int]int)
	res := []int{}
	if len(nums1) < len(nums2) {
		for _, num := range nums1 {
			temp[num]++
		}
		for i := 0; i < len(nums2); i++ {
			if temp[nums2[i]] > 0 {
				temp[nums2[i]]--
				res = append(res, nums2[i])
			}
		}
	} else {
		for _, num := range nums2 {
			temp[num]++
		}
		for i := 0; i < len(nums1); i++ {
			if temp[nums1[i]] > 0 {
				temp[nums1[i]]--
				res = append(res, nums1[i])
			}
		}
	}
	return res
}