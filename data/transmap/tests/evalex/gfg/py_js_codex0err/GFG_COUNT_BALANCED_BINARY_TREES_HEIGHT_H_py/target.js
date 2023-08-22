function f_gold(h) {
  var MOD = 1000000007;
  var dp = Array(h + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (var i = 2; i <= h; i++) dp[i] = (dp[i - 1] * ((2 * dp[i - 2]) % MOD + dp[i - 1]) % MOD) % MOD;
  return dp[h];
}

