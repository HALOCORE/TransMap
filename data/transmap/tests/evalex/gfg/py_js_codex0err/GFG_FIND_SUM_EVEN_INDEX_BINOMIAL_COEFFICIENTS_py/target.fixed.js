function f_gold(n) {
  var C = Array(n+1).fill().map(_ => Array(n+1).fill(0));
  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= Math.min(i-1, n); j++) {
      if (j == 0 || j == i) C[i][j] = 1;
      else C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (n % 2 == 0) sum = sum + C[n][i];
  }
  return sum;
}

