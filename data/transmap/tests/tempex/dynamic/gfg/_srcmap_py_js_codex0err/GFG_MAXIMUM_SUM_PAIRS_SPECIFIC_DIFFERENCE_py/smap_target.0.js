function f_gold(arr, N, K) {
  arr.sort();
  var dp = new Array(N);
  dp[0] = 0;
  for (var i = 1; i < N; i++) {
    dp[i] = dp[i - 1];
    if (arr[i] - arr[i - 1] < K) {
      if (i >= 2) dp[i] = Math.max(dp[i], dp[i - 2] + arr[i] + arr[i - 1]);
      else dp[i] = Math.max(dp[i], arr[i] + arr[i - 1]);
    }
  }
  return dp[N - 1];
}

