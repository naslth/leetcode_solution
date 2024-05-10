/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let tempRes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = [];
      temp.push(arr[i]);
      temp.push(arr[j]);
      tempRes.push(temp);
    }
  }
  tempRes.sort((a, b) => {
    return a[0] / a[1] - b[0] / b[1];
  });
  return tempRes[k - 1];
};
