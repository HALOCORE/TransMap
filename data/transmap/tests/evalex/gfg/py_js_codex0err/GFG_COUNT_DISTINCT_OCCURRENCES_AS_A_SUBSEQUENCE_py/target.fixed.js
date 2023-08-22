function f_gold(S, T) {
  var m = T.length;
  var n = S.length;
  if (m > n) return 0;
  var mat = Array(m+1).fill().map(_ => Array(n+1).fill(0));
  for (var i = 1; i < m + 1; i++) mat[i][0] = 0;
  for (var j = 0; j < n + 1; j++) mat[0][j] = 1;
  for (var i = 1; i < m + 1; i++) {
    for (var j = 1; j < n + 1; j++) {
      if (T[i - 1] != S[j - 1]) mat[i][j] = mat[i][j - 1];
      else mat[i][j] = mat[i][j - 1] + mat[i - 1][j - 1];
    }
  }
  return mat[m][n];
}

