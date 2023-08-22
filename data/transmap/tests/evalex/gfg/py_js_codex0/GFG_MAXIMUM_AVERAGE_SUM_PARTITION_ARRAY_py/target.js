function f_gold(A, K) {
  var n = A.length;
  var pre_sum = Array(n + 1).fill(0);
  pre_sum[0] = 0;
  for (var i = 0; i < n; i++) pre_sum[i + 1] = pre_sum[i] + A[i];
  var dp = Array(n).fill(0);
  var sum = 0;
  for (var i = 0; i < n; i++) dp[i] = (pre_sum[n] - pre_sum[i]) / (n - i);
  for (var k = 0; k < K - 1; k++) {
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) dp[i] = Math.max(dp[i], (pre_sum[j] - pre_sum[i]) / (j - i) + dp[j]);
    }
  }
  return Math.floor(dp[0]);
}

