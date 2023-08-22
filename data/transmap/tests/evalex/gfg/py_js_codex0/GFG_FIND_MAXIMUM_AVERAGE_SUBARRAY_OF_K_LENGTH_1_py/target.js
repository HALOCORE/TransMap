function f_gold(arr, n, k) {
  if (k > n) return -1;
  var sum = arr[0];
  for (var i = 1; i < k; i++) sum += arr[i];
  var max_sum = sum;
  var max_end = k - 1;
  for (var i = k; i < n; i++) {
    sum = sum + arr[i] - arr[i - k];
    if (sum > max_sum) {
      max_sum = sum;
      max_end = i;
    }
  }
  return max_end - k + 1;
}

