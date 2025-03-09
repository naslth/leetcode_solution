func numberOfAlternatingGroups(colors []int, k int) int {
	res := 0
	group := make([]int, 0)
	n := len(colors)
	linearColors := make([]int, 0)
	for i := 0; i < n; i++ {
		linearColors = append(linearColors, colors[i])
	}
	for i := 0; i < k-1; i++ {
		linearColors = append(linearColors, colors[i])
	}
	for i := 0; i < n+k-1; i++ {
		l := len(group)
		if l >= 1 {
			if group[l-1] == linearColors[i] {
				group = group[:0]
			}
		}
		group = append(group, linearColors[i])

		if len(group) == k {
			res++
			group = group[1:]
		}
	}
	return res
}