/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let binK = k.toString(2);
    let temp = 0;
    let res = 0;
    for (let num of nums) {
        temp ^= num
    }
    temp = temp.toString(2)
    while (binK.length != temp.length) {
        if (binK.length < temp.length) {
            binK = "0".concat(binK);
        }
        else {
            temp = "0".concat(temp);
        }
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] != binK[i]) {
            res++;
        }
    }
    return res;
};