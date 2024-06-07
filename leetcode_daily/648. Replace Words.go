func replaceWords(dictionary []string, sentence string) string {
	arrWord := strings.Split(sentence, " ")
	for i := 0; i < len(arrWord); i++ {
		for _, pre := range dictionary {
			if strings.HasPrefix(arrWord[i], pre) {
				arrWord[i] = pre
			}
		}
	}
	res := strings.Join(arrWord, " ")
	return res
}