/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let n = nums.length;
    for(let i = 0;i<=n;i++) {
        let temp = 0;
        for(num of nums) {
            if(num >= i) {
                temp++;
            }
        }
        if(temp == i) return temp
    }
    return -1
};