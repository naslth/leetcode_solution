package leetcodedaily

func findMissingAndRepeatedValues(grid [][]int) []int {
	ans := make([]int, 0)
	set := make(map[int]int)
	n := len(grid)
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if set[grid[i][j]] == 0 {
				set[grid[i][j]] = 1
			} else {
				ans = append(ans, grid[i][j])
			}
		}
	}
	for i := 1; i <= n*n; i++ {
		if set[i] == 0 {
			ans = append(ans, i)
		}
	}
	return ans
}
