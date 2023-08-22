function f_gold(arr, n) {
  let max = 0;
  let msis = Array(n).fill(0);
  for (let i = 0; i < n; i++) msis[i] = arr[i];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && msis[i] < msis[j] + arr[i]) msis[i] = msis[j] + arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (max < msis[i]) max = msis[i];
  }
  return max;
}

