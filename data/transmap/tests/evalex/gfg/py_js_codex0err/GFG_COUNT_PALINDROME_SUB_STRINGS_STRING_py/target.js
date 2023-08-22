function f_gold(str, n) {
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }
  let P = new Array(n);
  for (let i = 0; i < n; i++) {
    P[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    P[i][i] = true;
  }
  for (let i = 0; i < n - 1; i++) {
    if (str[i] == str[i + 1]) {
      P[i][i + 1] = true;
      dp[i][i + 1] = 1;
    }
  }
  for (let gap = 2; gap < n; gap++) {
    for (let i = 0; i < n - gap; i++) {
      let j = gap + i;
      if (str[i] == str[j] && P[i + 1][j - 1]) {
        P[i][j] = true;
      }
      if (P[i][j] == true) {
        dp[i][j] = dp[i][j - 1] + dp[i + 1][j] + 1 - dp[i + 1][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
      }
    }
  }
  return dp[0][n - 1];
}


