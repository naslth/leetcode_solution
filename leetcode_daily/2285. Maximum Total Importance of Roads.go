package leetcodedaily

import "sort"

type kv struct {
	Key   int
	Value int
}

func maximumImportance(n int, roads [][]int) int64 {
	temp := make(map[int]int)
	for _, road := range roads {
		temp[road[0]]++
		temp[road[1]]++
	}
	var kvSlice []kv
	for k, v := range temp {
		kvSlice = append(kvSlice, kv{k, v})
	}
	sort.Slice(kvSlice, func(i, j int) bool {
		return kvSlice[i].Value > kvSlice[j].Value
	})
	i := n
	var res int64
	for _, kv := range kvSlice {
		res += int64(kv.Value * i)
		i--
	}
	return res
}
