function f_gold(p, q) {
  let dp = Array(q).fill(1);
  for (let i = 0; i < p - 1; i++) {
    for (let j = 1; j < q; j++) dp[j] += dp[j - 1];
  }
  return dp[q - 1];
}

