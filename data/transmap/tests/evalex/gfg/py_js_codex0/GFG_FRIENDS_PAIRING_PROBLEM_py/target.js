function f_gold(n) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    if (i <= 2) dp[i] = i;
    else dp[i] = dp[i - 1] + (i - 1) * dp[i - 2];
  }
  return dp[n];
}

