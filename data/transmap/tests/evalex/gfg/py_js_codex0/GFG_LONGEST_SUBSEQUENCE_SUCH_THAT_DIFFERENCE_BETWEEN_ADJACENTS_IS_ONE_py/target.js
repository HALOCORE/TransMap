function f_gold(arr, n) {
  let dp = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if ((arr[i] == arr[j] + 1) || (arr[i] == arr[j] - 1)) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    if (result < dp[i]) result = dp[i];
  }
  return result;
}

