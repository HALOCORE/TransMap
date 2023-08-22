function f_gold(n, a, b, c) {
  let dp = new Array(n + 10).fill(-1);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] != -1) {
      if (i + a <= n) dp[i + a] = Math.max(dp[i] + 1, dp[i + a]);
      if (i + b <= n) dp[i + b] = Math.max(dp[i] + 1, dp[i + b]);
      if (i + c <= n) dp[i + c] = Math.max(dp[i] + 1, dp[i + c]);
    }
  }
  return dp[n];
}

