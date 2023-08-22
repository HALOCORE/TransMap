function f_gold(n) {
  if (n <= 1) return n;
  var a = 0;
  var b = 1;
  var c = 1;
  var res = 1;
  while (c < n) {
    c = a + b;
    res = res + 1;
    a = b;
    b = c;
  }
  return res;
}

