function f_gold(n) {
  let dp = [];
  dp.push(1);
  dp.push(1);
  for (let i = 2; i <= n; i++) dp.push(dp[i - 1] + dp[i - 2] + 1);
  return dp[n];
}

