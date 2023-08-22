function f_gold(n, index, Sum, M, arr, dp) {
  var MAX = 0;
  if (index == n) {
    if ((Sum % M) == 0) return true;
    return false;
  }
  if (dp[index][Sum] != -1) return dp[index][Sum];
  var placeAdd = f_gold(n, index + 1, Sum + arr[index], M, arr, dp);
  var placeMinus = f_gold(n, index + 1, Sum - arr[index], M, arr, dp);
  var res = placeAdd || placeMinus;
  dp[index][Sum] = res;
  return res;
}

