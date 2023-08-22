function f_gold(X, Y) {
  var m = X.length;
  var n = Y.length;
  var L = [[0], [0]];
  var bi = false;
  for (var i = 0; i < m; i++) {
    bi = i & 1;
    for (var j = 0; j < n + 1; j++) {
      if (i == 0 || j == 0) L[bi][j] = 0;
      else if (X[i] == Y[j - 1]) L[bi][j] = L[1 - bi][j - 1] + 1;
      else L[bi][j] = Math.max(L[1 - bi][j], L[bi][j - 1]);
    }
  }
  return L[bi][n];
}

