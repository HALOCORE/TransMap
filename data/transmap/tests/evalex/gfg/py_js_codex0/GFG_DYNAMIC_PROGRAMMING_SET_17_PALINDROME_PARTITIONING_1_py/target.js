function f_gold(str1) {
  var n = str1.length;
  var C = Array(n + 1).fill(0);
  var P = Array(n + 1).fill(0).map(() => Array(n + 1).fill(false));
  for (var i = 0; i < n; i++) P[i][i] = true;
  for (var L = 2; L < n + 1; L++) {
    for (var i = 0; i < n - L + 1; i++) {
      var j = i + L - 1;
      if (L == 2) P[i][j] = (str1[i] == str1[j]);
      else P[i][j] = ((str1[i] == str1[j]) && P[i + 1][j - 1]);
    }
  }
  for (var i = 0; i < n; i++) {
    if (P[0][i] == true) C[i] = 0;
    else {
      C[i] = Number.MAX_SAFE_INTEGER;
      for (var j = 0; j < i; j++) {
        if (P[j + 1][i] == true && 1 + C[j] < C[i]) C[i] = 1 + C[j];
      }
    }
  }
  return C[n - 1];
}

