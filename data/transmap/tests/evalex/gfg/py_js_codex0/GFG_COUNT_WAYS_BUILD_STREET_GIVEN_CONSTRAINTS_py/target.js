function f_gold(n) {
  let dp = [[0] * (n + 1) for (i = 0; i < 2; i++)];
  dp[0][1] = 1;
  dp[1][1] = 2;
  for (i = 2; i < n + 1; i++) {
    dp[0][i] = dp[0][i - 1] + dp[1][i - 1];
    dp[1][i] = dp[0][i - 1] * 2 + dp[1][i - 1];
  }
  return dp[0][n] + dp[1][n];
}

