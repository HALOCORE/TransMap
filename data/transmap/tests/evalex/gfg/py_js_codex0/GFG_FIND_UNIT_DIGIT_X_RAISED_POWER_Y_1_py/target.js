function f_gold(x, y) {
  x = x % 10;
  if (y != 0) y = y % 4 + 4;
  return ((Math.pow(x, y)) % 10);
}

