function f_gold(n) {
  var C = Array(n+2).fill().map(_ => Array(n+2).fill(0));
  for (var i = 0; i < n + 1; i++) {
    for (var j = 0; j < Math.min(i, n) + 1; j++) {
      if (j == 0 || j == i) C[i][j] = 1;
      else C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }
  var sum = 0;
  for (var i = 0; i < n + 1; i++) sum += C[n][i];
  return sum;
}

