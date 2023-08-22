function f_gold(str) {
  var n = str.length;
  var LCSRe = [[0], [0]];
  for (var i = 0; i < n + 1; i++) {
    LCSRe[i] = [];
    for (var j = 0; j < n + 1; j++) {
      LCSRe[i][j] = 0;
    }
  }
  var res = "";
  var res_length = 0;
  var index = 0;
  for (var i = 1; i < n + 1; i++) {
    for (var j = i + 1; j < n + 1; j++) {
      if (str[i - 1] == str[j - 1] && LCSRe[i - 1][j - 1] < (j - i)) {
        LCSRe[i][j] = LCSRe[i - 1][j - 1] + 1;
        if (LCSRe[i][j] > res_length) {
          res_length = LCSRe[i][j];
          index = Math.max(i, index);
        }
      }
      else {
        LCSRe[i][j] = 0;
      }
    }
  }
  if (res_length > 0) {
    for (var i = index - res_length + 1; i < index + 1; i++) {
      res = res + str[i - 1];
    }
  }
  return res;
}

