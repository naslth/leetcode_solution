/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let res = 0
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
        arr.push(cost)
    }
    let sum = 0
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
        while(sum>maxCost && j<=i) {
            sum-= arr[j]
            j++;
        }
        res = Math.max(res,i-j+1);
    }
    return res;
};