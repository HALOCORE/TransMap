function f_gold(arr, n) {
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) d1 += arr[i][j];
      if (i == n - j - 1) d2 += arr[i][j];
    }
  }
  return Math.abs(d1 - d2);
}

