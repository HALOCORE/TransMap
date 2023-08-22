function f_gold(x, y, z) {
  var c = 0;
  while (x && y && z) {
    x = x - 1;
    y = y - 1;
    z = z - 1;
    c = c + 1;
  }
  return c;
}

