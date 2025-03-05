package leetcodedaily

func coloredCells(n int) int64 {
	res := 1
	for i := 2; i <= n; i++ {
		res += (i - 1) * 4
	}
	return int64(res)
}
