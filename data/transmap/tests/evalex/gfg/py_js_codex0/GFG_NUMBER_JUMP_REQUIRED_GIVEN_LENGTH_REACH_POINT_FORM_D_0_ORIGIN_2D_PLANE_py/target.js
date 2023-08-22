function f_gold(a, b, d) {
  var temp = a;
  a = Math.min(a, b);
  b = Math.max(temp, b);
  if (d >= b) return (d + b - 1) / b;
  if (d == 0) return 0;
  if (d == a) return 1;
  return 2;
}

