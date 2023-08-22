function f_gold(n) {
  var a = 1;
  var b = 2;
  var c = 0;
  if (n <= 2) return n;
  for (var i = 3; i <= n; i++) {
    c = b + (i - 1) * a;
    a = b;
    b = c;
  }
  return c;
}

