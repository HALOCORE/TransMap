const f_gold = (n, k, x) => {
  let dp = [];
  dp.push(0);
  dp.push(1);
  let i = 2;
  while (i < n) {
    dp.push((k - 2) * dp[i - 1] + (k - 1) * dp[i - 2]);
    i = i + 1;
  }
  return ((k - 1) * dp[n - 2] if x == 1 else dp[n - 1]);
};


