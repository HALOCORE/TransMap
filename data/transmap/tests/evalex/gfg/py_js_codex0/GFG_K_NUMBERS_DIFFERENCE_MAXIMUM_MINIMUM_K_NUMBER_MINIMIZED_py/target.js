function f_gold(arr, n, k) {
  var result = +2147483647;
  arr.sort();
  for (var i = 0; i < n - k + 1; i++) result = Math.min(result, arr[i + k - 1] - arr[i]);
  return result;
}

