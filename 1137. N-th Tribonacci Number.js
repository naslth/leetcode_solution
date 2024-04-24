/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n == 0) return 0
    else if (n == 1) return 1
    else if (n == 2) return 1
    let arr = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        let temp = arr[0] + arr[1] + arr[2];
        arr[0] = arr[1];
        arr[1] = arr[2];
        arr[2] = temp
    }
    return arr[2];
};