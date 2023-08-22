function f_gold(dp, arr1, n, arr2, m, k) {
  if (k < 0) return -(10 ** 7);
  if (n < 0 || m < 0) return 0;
  let ans = dp[n][m][k];
  if (ans != - 1) return ans;
  ans = Math.max(f_gold(dp, arr1, n - 1, arr2, m, k), f_gold(dp, arr1, n, arr2, m - 1, k));
  if (arr1[n - 1] == arr2[m - 1]) ans = Math.max(ans, 1 + f_gold(dp, arr1, n - 1, arr2, m - 1, k));
  ans = Math.max(ans, f_gold(dp, arr1, n - 1, arr2, m - 1, k - 1));
  return ans;
}

