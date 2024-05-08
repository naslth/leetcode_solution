/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let temp = [...score];
  let m = new Map();
  temp.sort((a, b) => b - a);
  for (let i = 0; i < temp.length; i++) {
    m.set(temp[i], i + 1);
  }
  let map = {
    1: "Gold Medal",
    2: "Silver Medal",
    3: "Bronze Medal",
  };
  let res = [];
  for (s of score) {
    if (map.hasOwnProperty(m.get(s))) {
      res.push(map[m.get(s)]);
    } else res.push(m.get(s).toString());
  }
  return res;
};
