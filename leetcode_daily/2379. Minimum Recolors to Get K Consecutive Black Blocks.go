func minimumRecolors(blocks string, k int) int {
	w, b := 0, 0
	res := math.MaxInt
	s := ""
	for i := 0; i < len(blocks); i++ {
		if blocks[i] == 'W' {
			w++
		} else {
			b++
		}
		s += string(blocks[i])
		if w+b == k {
			if w < res {
				res = w
			}
			if s[0] == 'W' {
				w--
			} else {
				b--
			}
			s = s[1:]
		}
	}
	return res
}