function f_gold(n) {
  var count = 0;
  if (n && !(n & (n - 1))) return n;
  while (n != 0) {
    n >>= 1;
    count += 1;
  }
  return 1 << count;
}

