function f_gold(arr, n, x, y) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] >= x && arr[i] <= y) count += 1;
  }
  return count;
}

