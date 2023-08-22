function f_gold(a, n) {
  var i = 0, total = 1;
  for (i = 2; i < n + 2; i++) {
    total += i;
    total -= a[i - 2];
  }
  return total;
}

