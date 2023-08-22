function f_gold(arr, n, x) {
  var res = 0;
  for (var i = 0; i < n; i++) {
    if (x == arr[i]) res += 1;
  }
  return res;
}

