function f_gold(x, p1, p2, n) {
  var set1 = (x >> p1) & ((1 << n) - 1);
  var set2 = (x >> p2) & ((1 << n) - 1);
  var xor = (set1 ^ set2);
  xor = (xor << p1) | (xor << p2);
  var result = x ^ xor;
  return result;
}

