function f_gold(arr, n, x) {
  if (n < 2) return false;
  var s = new Set();
  for (var i = 0; i < n; i++) {
    if (arr[i] == 0) {
      if (x == 0) return true;
      else continue;
    }
    if (x % arr[i] == 0) {
      if (s.has(Math.floor(x / arr[i]))) return true;
      s.add(arr[i]);
    }
  }
  return false;
}

