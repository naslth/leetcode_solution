package leetcodedaily

func longestPalindrome(s string) int {
	res := 0
	dict := make(map[string]int)
	for _, v := range s {
		if _, ok := dict[string(v)]; ok {
			dict[string(v)]++
		} else {
			dict[string(v)] = 1
		}
		value := dict[string(v)]
		if value == 2 {
			dict[string(v)] = 0
			res += 2
		}
	}
	for _, value := range dict {
		if value == 1 {
			res++
			break
		}
	}
	return res
}
