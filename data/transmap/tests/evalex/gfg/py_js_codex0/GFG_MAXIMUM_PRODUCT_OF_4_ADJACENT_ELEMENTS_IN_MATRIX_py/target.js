function f_gold(arr, n) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((j - 3) >= 0) {
        let result = (arr[i][j] * arr[i][j - 1] * arr[i][j - 2] * arr[i][j - 3]);
        if (max < result) max = result;
      }
      if ((i - 3) >= 0) {
        let result = (arr[i][j] * arr[i - 1][j] * arr[i - 2][j] * arr[i - 3][j]);
        if (max < result) max = result;
      }
      if ((i - 3) >= 0 && (j - 3) >= 0) {
        let result = (arr[i][j] * arr[i - 1][j - 1] * arr[i - 2][j - 2] * arr[i - 3][j - 3]);
        if (max < result) max = result;
      }
    }
  }
  return max;
}

