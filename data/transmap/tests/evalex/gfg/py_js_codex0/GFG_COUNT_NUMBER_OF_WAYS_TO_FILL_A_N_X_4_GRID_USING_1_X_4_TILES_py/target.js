function f_gold(n) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (i <= 3) dp[i] = 1;
    else if (i == 4) dp[i] = 2;
    else dp[i] = dp[i - 1] + dp[i - 4];
  }
  return dp[n];
}

