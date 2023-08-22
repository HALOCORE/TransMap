function f_gold(arr, n) {
  let msis = Array(n);
  let msds = Array(n);
  let max_sum = 0;
  msis[0] = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) msis[i] = msis[i - 1] + arr[i];
    else msis[i] = arr[i];
  }
  msds[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) msds[i] = msds[i + 1] + arr[i];
    else msds[i] = arr[i];
  }
  for (let i = 0; i < n; i++) {
    if (max_sum < (msis[i] + msds[i] - arr[i])) max_sum = (msis[i] + msds[i] - arr[i]);
  }
  return max_sum;
}

