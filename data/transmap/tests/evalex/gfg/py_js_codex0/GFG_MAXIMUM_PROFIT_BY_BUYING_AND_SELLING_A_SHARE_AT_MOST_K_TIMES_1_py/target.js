function f_gold(price, n, k) {
  let profit = Array(k + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= k; i++) {
    let prevDiff = Number.NEGATIVE_INFINITY;
    for (let j = 1; j < n; j++) {
      prevDiff = Math.max(prevDiff, profit[i - 1][j - 1] - price[j - 1]);
      profit[i][j] = Math.max(profit[i][j - 1], price[j] + prevDiff);
    }
  }
  return profit[k][n - 1];
}

