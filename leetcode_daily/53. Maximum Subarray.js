/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0]
    let curRes = nums[0]
    for (let i = 1; i < nums.length; i++) {
        curRes = Math.max(curRes + nums[i], nums[i])
        res = Math.max(res, curRes);
    }
    return res;
};