function f_gold(str) {
  var n = str.length;
  var dp = Array(n+1).fill().map(_ => Array(n+1).fill(0));
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (str[i - 1] == str[j - 1] && i != j) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  var res = "";
  var i = n;
  var j = n;
  while (i > 0 && j > 0) {
    if (dp[i][j] == dp[i - 1][j - 1] + 1) {
      res += str[i - 1];
      i -= 1;
      j -= 1;
    } else if (dp[i][j] == dp[i - 1][j]) i -= 1;
    else j -= 1;
  }
  res = res.split("").reverse().join("");
  return res;
}

