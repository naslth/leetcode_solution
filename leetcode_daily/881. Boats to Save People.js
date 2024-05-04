/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let res = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] > limit / 2) {
      res += right - left + 1;
      break;
    }
    if (people[right] == limit) {
      res++;
      right--;
    } else if (people[left] + people[right] > limit) {
      res++;
      right--;
    } else {
      res++;
      right--;
      left++;
    }
  }
  return res;
};
