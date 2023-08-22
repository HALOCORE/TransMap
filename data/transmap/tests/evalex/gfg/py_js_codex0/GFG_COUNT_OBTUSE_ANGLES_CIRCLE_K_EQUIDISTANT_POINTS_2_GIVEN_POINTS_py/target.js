function f_gold(a, b, k) {
  var c1 = (b - a) - 1;
  var c2 = (k - b) + (a - 1);
  if (c1 == c2) return 0;
  return Math.min(c1, c2);
}

