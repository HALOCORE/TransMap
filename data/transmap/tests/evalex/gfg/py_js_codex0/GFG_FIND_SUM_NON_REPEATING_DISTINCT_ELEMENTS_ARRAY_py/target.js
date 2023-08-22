function f_gold(arr, n) {
  var s = new Set();
  var sum = 0;
  for (var i = 0; i < n; i++) {
    if (!s.has(arr[i])) s.add(arr[i]);
  }
  for (var i of s) sum = sum + i;
  return sum;
}

