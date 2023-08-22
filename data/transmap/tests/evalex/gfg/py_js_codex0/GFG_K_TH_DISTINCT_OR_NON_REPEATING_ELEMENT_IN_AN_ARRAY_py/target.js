function f_gold(arr, n, k) {
  var dist_count = 0;
  for (var i = 0; i < n; i++) {
    var j = 0;
    while (j < n) {
      if (i != j && arr[j] == arr[i]) break;
      j++;
    }
    if (j == n) dist_count++;
    if (dist_count == k) return arr[i];
  }
  return -1;
}

