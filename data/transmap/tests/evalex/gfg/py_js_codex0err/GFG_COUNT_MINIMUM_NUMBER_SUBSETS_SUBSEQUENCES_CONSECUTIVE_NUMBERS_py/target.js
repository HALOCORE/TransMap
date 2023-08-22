function f_gold(arr, n) {
  var x = arr.sort();
  var count = 1;
  for (var i = 0; i < n - 1; i++) {
    if (x[i] + 1 != x[i + 1]) count = count + 1;
  }
  return count;
}

