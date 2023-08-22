function f_gold(n) {
  var p = 1;
  if (n && !(n & (n - 1))) return n;
  while (p < n) p <<= 1;
  return p;
}

