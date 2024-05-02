/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let res = -1;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] > 0 || nums[right] < 0) {
      return -1;
    } else if (Math.abs(nums[left]) > nums[right]) {
      left++;
    } else if (Math.abs(nums[left]) < nums[right]) {
      right--;
    } else if (Math.abs(nums[left]) == nums[right]) {
      res = nums[right];
      break;
    }
  }
  return res;
};
