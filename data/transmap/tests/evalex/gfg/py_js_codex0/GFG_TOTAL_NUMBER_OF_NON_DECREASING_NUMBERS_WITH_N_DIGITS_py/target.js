function f_gold(n) {
  let dp = Array(10).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 0; i < 10; i++) dp[i][1] = 1;
  for (let digit = 0; digit < 10; digit++) {
    for (let len = 2; len < n + 1; len++) {
      for (let x = 0; x < digit + 1; x++) dp[digit][len] += dp[x][len - 1];
    }
  }
  let count = 0;
  for (let i = 0; i < 10; i++) count += dp[i][n];
  return count;
}

