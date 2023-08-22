function f_gold(arr, n, k) {
  var count_map = {};
  for (var i = 0; i < n; i++) {
    if (arr[i] in count_map) count_map[arr[i]] += 1;
    else count_map[arr[i]] = 1;
    i += 1;
  }
  for (var i = 0; i < n; i++) {
    if (count_map[arr[i]] == k) return arr[i];
    i += 1;
  }
  return -1;
}

