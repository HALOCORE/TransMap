function f_gold(arr, n) {
  arr.sort();
  var count = 0;
  var max_count = 0;
  var min_count = n;
  for (var i = 0; i < n - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      count += 1;
      continue;
    } else {
      max_count = Math.max(max_count, count);
      min_count = Math.min(min_count, count);
      count = 0;
    }
  }
  return max_count - min_count;
}

