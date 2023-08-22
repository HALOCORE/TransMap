function f_gold(arr, n) {
  var count = 0;
  arr.sort();
  for (var i = 0; i < n - 1; i++) {
    if (arr[i] != arr[i + 1] && arr[i] != arr[i + 1] - 1) count += arr[i + 1] - arr[i] - 1;
  }
  return count;
}

