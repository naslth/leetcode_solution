/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res = new Set();
    for (let num of nums) {
        if (!res.has(num)) {
            res.add(num);
        } else {
            res.delete(num);
        }
    }
    return Array.from(res);
};