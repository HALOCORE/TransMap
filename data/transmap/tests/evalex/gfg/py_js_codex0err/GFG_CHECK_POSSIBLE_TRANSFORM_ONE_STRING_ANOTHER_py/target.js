function f_gold(s1, s2) {
  var n = s1.length;
  var m = s2.length;
  var dp = new Array(n + 1);
  for (var i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1);
    for (var j = 0; j < m + 1; j++) {
      dp[i][j] = false;
    }
  }
  dp[0][0] = true;
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length + 1; j++) {
      if (dp[i][j]) {
        if ((j < s2.length && (s1[i].toUpperCase() == s2[j]))) dp[i + 1][j + 1] = true;
        if (s1[i].toUpperCase() == s1[i]) dp[i + 1][j] = true;
      }
    }
  }
  return dp[n][m];
}

