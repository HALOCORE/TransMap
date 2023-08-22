function f_gold(a, n) {
  var zero = 0;
  var two = 0;
  for (var i = 0; i < n; i++) {
    if (a[i] == 0) zero++;
    if (a[i] == 2) two++;
  }
  var cnt = (zero * (zero - 1)) / 2 + (two * (two - 1)) / 2;
  return cnt;
}

