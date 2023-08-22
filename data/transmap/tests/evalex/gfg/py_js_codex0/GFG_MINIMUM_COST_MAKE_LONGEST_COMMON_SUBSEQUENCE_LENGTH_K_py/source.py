def f_gold(X, Y, l, r, k, dp):
  if k == 0: return 0
  if l < 0 or r < 0: return 1000000000
  if dp[l][r][k] != - 1: return dp[l][r][k]
  cost =((ord(X[l])- ord('a'))^(ord(Y[r])- ord('a')))
  dp[l][r][k] = min([cost + f_gold(X, Y, l - 1, r - 1, k - 1, dp), f_gold(X, Y, l - 1, r, k, dp), f_gold(X, Y, l, r - 1, k, dp)])
  return dp[l][r][k]
