function f_gold(a, b) {
  let n = a.length;
  let m = b.length;
  if (m == 0) return 1;
  let dp = new Array(m + 1);
  for (let _ = 0; _ < m + 1; _++) {
    dp[_] = new Array(n + 1);
  }
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      if (i == 0) {
        if (j == 0) {
          if (a[j] == b[i]) dp[i][j] = 1;
          else dp[i][j] = 0;
        } else if (a[j] == b[i]) dp[i][j] = dp[i][j - 1] + 1;
        else dp[i][j] = dp[i][j - 1];
      } else {
        if (a[j] == b[i]) dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
        else dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
}


