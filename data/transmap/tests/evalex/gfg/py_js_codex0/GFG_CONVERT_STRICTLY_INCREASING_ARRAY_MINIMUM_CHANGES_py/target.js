function f_gold(arr, n) {
  var LIS = Array(n).fill(0);
  var len = 0;
  for (var i = 0; i < n; i++) LIS[i] = 1;
  for (var i = 1; i < n; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j] && (i - j) <= (arr[i] - arr[j])) LIS[i] = Math.max(LIS[i], LIS[j] + 1);
    }
    len = Math.max(len, LIS[i]);
  }
  return (n - len);
}

