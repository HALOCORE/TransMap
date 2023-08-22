function f_gold(arr, n) {
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    d1 = d1 + arr[i][i];
    d2 = d2 + arr[i][n - i - 1];
  }
  return Math.abs(d1 - d2);
}

