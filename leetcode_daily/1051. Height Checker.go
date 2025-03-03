package leetcodedaily

import (
	"fmt"
	"sort"
)

func heightChecker(heights []int) int {
	expected := make([]int, len(heights))
	copy(expected, heights)
	sort.Ints(expected)
	res := 0
	for i := 0; i < len(expected); i++ {
		fmt.Print(expected[i], heights[i])
		if expected[i] != heights[i] {
			res++
		}
	}
	return res
}
