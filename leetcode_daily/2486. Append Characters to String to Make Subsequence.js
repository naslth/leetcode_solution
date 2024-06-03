/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let j = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (j < t.length && s[i] == t[j]) {
            j++;
        }
    }
    if (j < t.length) {
        res += t.length - j
    }
    return res;
};