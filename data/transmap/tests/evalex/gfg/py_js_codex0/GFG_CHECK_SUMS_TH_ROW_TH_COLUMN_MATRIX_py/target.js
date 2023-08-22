function f_gold(a, n, m) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < m; j++) {
      sum1 += a[i][j];
      sum2 += a[j][i];
    }
    if (sum1 == sum2) return 1;
  }
  return 0;
}

