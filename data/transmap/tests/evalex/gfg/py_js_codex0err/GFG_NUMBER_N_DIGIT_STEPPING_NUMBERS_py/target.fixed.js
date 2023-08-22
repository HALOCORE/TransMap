function f_gold(n) {
  var dp = Array(n+1).fill().map(_ => Array(10).fill(0));
  if (n == 1) return 10;
  for (var j = 0; j < 10; j++) dp[1][j] = 1;
  for (var i = 2; i < n + 1; i++) {
    for (var j = 0; j < 10; j++) {
      if (j == 0) dp[i][j] = dp[i - 1][j + 1];
      else if (j == 9) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    }
  }
  var sum = 0;
  for (var j = 1; j < 10; j++) sum = sum + dp[n][j];
  return sum;
}

