function f_gold(n, k) {
  let dp = [[[0, 0] for __ in range(k + 1)] for _ in range(n + 1)];
  dp[1][0][0] = 1;
  dp[1][0][1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      dp[i][j][0] = dp[i - 1][j][0] + dp[i - 1][j][1];
      dp[i][j][1] = dp[i - 1][j][0];
      if (j >= 1) dp[i][j][1] += dp[i - 1][j - 1][1];
    }
  }
  return dp[n][k][0] + dp[n][k][1];
}

