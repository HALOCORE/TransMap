function f_gold(a, n) {
  var i, total = 0, 1;
  for (i = 0; i < n + 2; i++) {
    total += i;
    total -= a[i - 2];
  }
  return total;
}

