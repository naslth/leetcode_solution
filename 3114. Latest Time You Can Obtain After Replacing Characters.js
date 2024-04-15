/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
  s = s.split("");
  if (s[0] == "?") {
    if (s[1] == "?") {
      s.splice(0, 1, "1");
      s.splice(1, 1, "1");
    } else {
      if (s[1] == "0" || s[1] == "1") {
        s.splice(0, 1, "1");
      } else {
        s.splice(0, 1, "0");
      }
    }
  } else {
    if (s[0] == "1") {
      if (s[1] == "?") {
        s.splice(1, 1, "1");
      }
    } else {
      if (s[1] == "?") {
        s.splice(1, 1, "9");
      }
    }
  }
  if (s[3] == "?") {
    if (s[4] == "?") {
      s.splice(3, 1, "5");
      s.splice(4, 1, "9");
    } else {
      s.splice(3, 1, "5");
    }
  } else {
    if (s[4] == "?") {
      s.splice(4, 1, "9");
    }
  }
  return s.join("");
};
