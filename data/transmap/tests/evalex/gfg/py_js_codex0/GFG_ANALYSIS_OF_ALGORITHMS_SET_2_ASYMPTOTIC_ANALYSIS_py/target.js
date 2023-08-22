function f_gold(arr, n, x) {
  var i = 0;
  for (i = 0; i < n; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
}

