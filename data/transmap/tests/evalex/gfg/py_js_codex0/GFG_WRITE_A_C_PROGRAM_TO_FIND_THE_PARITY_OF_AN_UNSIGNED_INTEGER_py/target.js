function f_gold(n) {
  var parity = 0;
  while (n) {
    parity = ~parity;
    n = n & (n - 1);
  }
  return parity;
}

