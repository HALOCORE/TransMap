function f_gold(arr, n) {
  if (n == 1) return true;
  arr.sort((a, b) => a-b);
  var d = arr[1] - arr[0];
  for (var i = 2; i < n; i++) {
    if (arr[i] - arr[i - 1] != d) return false;
  }
  return true;
}

