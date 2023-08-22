function f_gold(a, b, x, y) {
  if (a == 0) {
    x = 0;
    y = 1;
    return b;
  }
  var x1 = 1;
  var y1 = 1;
  var gcd = f_gold(b % a, a, x1, y1);
  x = y1 - (b / a) * x1;
  y = x1;
  return gcd;
}

