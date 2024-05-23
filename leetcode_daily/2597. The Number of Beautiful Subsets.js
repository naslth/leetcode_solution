/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  const getSubSets = (arr) => {
    let res = [[]];
    for (let i of arr) {
      res.map((r) => res.push([...r, i]));
    }
    return res;
  };
  const arr = getSubSets(nums);
  let res = 0;
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) {
        temp.push([nums[i], nums[j]]);
      }
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length == 1) {
      res++;
      continue;
    }
    let check = true;
    for (let t of temp) {
      if (arr[i].includes(t[0]) && arr[i].includes(t[1])) {
        check = false;
        break;
      }
    }
    if (check) res++;
  }
  return res;
};
