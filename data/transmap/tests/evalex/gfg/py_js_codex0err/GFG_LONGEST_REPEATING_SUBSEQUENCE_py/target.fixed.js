function f_gold(str) {
  var n = str.length;
  var dp = Array(n+1).fill().map(_ => Array(n+1).fill(0));
  for (var i = 1; i < n + 1; i++) {
    for (var j = 1; j < n + 1; j++) {
      if (str[i - 1] == str[j - 1] && i != j) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[n][n];
}

