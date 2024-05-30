/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let res = 0;
    while (s !== '1') {
        if (s[s.length - 1] == '0') {
            s = s.slice(0, s.length - 1)
        }
        else {
            let flag = true;
            for (let i = s.length - 1; i >= 0; i--) {
                if (s[i] == '1') s = s.substring(0, i) + '0' + s.substring(i + 1);
                else {
                    s = s.substring(0, i) + '1' + s.substring(i + 1)
                    flag = false;
                    break;
                }
            }
            if(flag) {
                s = '1' + s;
            }
        }
        res++;
    }
    return res
};