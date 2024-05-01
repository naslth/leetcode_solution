/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let res = word;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == ch) {
      let temp = word
        .split("")
        .slice(0, i + 1)
        .reverse()
        .join("");
      res =
        temp +
        word
          .split("")
          .slice(i + 1)
          .join("");
      break;
    }
  }
  return res;
};
