function f_gold(n, index, modulo, M, arr, dp) {
  modulo = ((modulo % M) + M) % M;
  if (index == n) {
    if (modulo == 0) return 1;
    return 0;
  }
  if (dp[index][modulo] != -1) return dp[index][modulo];
  let placeAdd = f_gold(n, index + 1, modulo + arr[index], M, arr, dp);
  let placeMinus = f_gold(n, index + 1, modulo - arr[index], M, arr, dp);
  let res = Boolean(placeAdd || placeMinus);
  dp[index][modulo] = res;
  return res;
}

