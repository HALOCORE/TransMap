function f_gold(n) {
  if (n == 2 || n == 3) return (n - 1);
  var res = 1;
  while (n > 4) {
    n -= 3;
    res *= 3;
  }
  return n * res;
}

