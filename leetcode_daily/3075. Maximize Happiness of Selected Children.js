/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let res = 0;
  for (i = 0; i < k; i++) {
    if (happiness[i] - i > 0) {
      res += happiness[i] - i;
    }
  }
  return res;
};
