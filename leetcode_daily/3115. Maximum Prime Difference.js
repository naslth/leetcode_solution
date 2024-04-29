/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  let min = -1;
  let max = -1;
  let temp = Array.from(Array(100).keys());
  temp.shift();
  temp.shift();
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] % temp[i] == 0) {
        temp.splice(j, 1);
      }
    }
  }
  let flag = true;
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i]) && flag) {
      min = i;
      flag = false;
    } else if (temp.includes(nums[i])) {
      max = i;
    }
  }
  if (min < 0 || max < 0) return 0;
  return Math.abs(max - min);
};
