function f_gold(n) {
  let dp = Array(n + 1).fill(0).map(() => Array(27).fill(0));
  for (let i = 0; i < 26; i++) dp[1][i] = 1;
  for (let i = 2; i < n + 1; i++) {
    for (let j = 0; j < 26; j++) {
      if (j == 0) dp[i][j] = dp[i - 1][j + 1];
      else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]);
    }
  }
  let sum = 0;
  for (let i = 0; i < 26; i++) sum = sum + dp[n][i];
  return sum;
}

