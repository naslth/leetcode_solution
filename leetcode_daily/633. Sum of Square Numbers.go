func judgeSquareSum(c int) bool {
	max := int(math.Sqrt(float64(c)))
	j := max
	i := 0
	for i <= j {
		sum := (i*i + j*j)
		if sum == c {
			return true
		} else if sum > c {
			j--
		} else {
			i++
		}
	}
	return false
}