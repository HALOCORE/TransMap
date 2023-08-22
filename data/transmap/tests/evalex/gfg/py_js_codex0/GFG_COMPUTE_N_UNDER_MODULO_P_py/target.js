function f_gold(n, p) {
  if (n >= p) return 0;
  var result = 1;
  for (var i = 1; i <= n; i++) result = (result * i) % p;
  return result;
}

