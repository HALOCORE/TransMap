function f_gold(arr, N, k) {
  var maxSum = 0;
  arr.sort();
  var i = N - 1;
  while (i >= 0) {
    if (arr[i] - arr[i - 1] < k) {
      maxSum += arr[i];
      maxSum += arr[i - 1];
      i -= 1;
    }
    i -= 1;
  }
  return maxSum;
}

