function f_gold(a, n) {
  var x1 = a[0];
  var x2 = 1;
  for (var i = 1; i < n; i++) x1 = x1 ^ a[i];
  for (var i = 2; i < n + 2; i++) x2 = x2 ^ i;
  return x1 ^ x2;
}

