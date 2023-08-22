function f_gold(x, y) {
  while (y != 0) {
    var carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }
  return x;
}

