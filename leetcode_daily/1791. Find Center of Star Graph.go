package leetcodedaily

func findCenter(edges [][]int) int {
	temp := make(map[int]int)
	for _, edge := range edges {
		temp[edge[0]]++
		temp[edge[1]]++
		if temp[edge[0]] > 1 {
			return edge[0]
		}
		if temp[edge[1]] > 1 {
			return edge[1]
		}
	}
	return 0
}
