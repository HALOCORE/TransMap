function f_gold(str) {
  var n = str.length;
  var C = new Array(n);
  for (var i = 0; i < n; i++) {
    C[i] = new Array(n);
  }
  var P = new Array(n);
  for (var i = 0; i < n; i++) {
    P[i] = new Array(n);
  }
  var j = 0;
  var k = 0;
  var L = 0;
  for (var i = 0; i < n; i++) {
    P[i][i] = true;
    C[i][i] = 0;
  }
  for (L = 2; L <= n; L++) {
    for (var i = 0; i <= n - L; i++) {
      j = i + L - 1;
      if (L == 2) {
        P[i][j] = (str[i] == str[j]);
      }
      else {
        P[i][j] = ((str[i] == str[j]) && P[i + 1][j - 1]);
      }
      if (P[i][j] == true) {
        C[i][j] = 0;
      }
      else {
        C[i][j] = 100000000;
        for (k = i; k < j; k++) {
          C[i][j] = Math.min(C[i][j], C[i][k] + C[k + 1][j] + 1);
        }
      }
    }
  }
  return C[0][n - 1];
}

