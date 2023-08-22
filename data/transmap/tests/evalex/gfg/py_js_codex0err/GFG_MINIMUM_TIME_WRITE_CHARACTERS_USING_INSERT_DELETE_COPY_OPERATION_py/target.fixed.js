function f_gold(N, insrt, remov, cpy) {
  if (N == 0) return 0;
  if (N == 1) return insrt;
  var dp = new Array(N + 1).fill(0);
  for (var i = 1; i <= N; i++) {
    if (i % 2 == 0) dp[i] = Math.min(dp[i - 1] + insrt, dp[i / 2] + cpy);
    else dp[i] = Math.min(dp[i - 1] + insrt, dp[(i + 1) / 2] + cpy + remov);
  }
  return dp[N];
}

