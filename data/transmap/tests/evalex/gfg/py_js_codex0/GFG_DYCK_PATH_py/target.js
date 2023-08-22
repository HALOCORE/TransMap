function f_gold(n) {
  var res = 1;
  for (var i = 0; i < n; i++) {
    res *= (2 * n - i);
    res /= (i + 1);
  }
  return res / (n + 1);
}

