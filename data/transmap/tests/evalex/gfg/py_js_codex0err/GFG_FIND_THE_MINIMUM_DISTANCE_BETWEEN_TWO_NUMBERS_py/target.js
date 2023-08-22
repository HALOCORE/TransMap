function f_gold(arr, n, x, y) {
  var min_dist = 99999999;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((x == arr[i] && y == arr[j] || y == arr[i] && x == arr[j]) && min_dist > Math.abs(i - j)) min_dist = Math.abs(i - j);
    }
  }
  return min_dist;
}

