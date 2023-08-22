function f_gold(x) {
  if (x == 0 || x == 1) return x;
  var i = 1;
  var result = 1;
  while (result <= x) {
    i += 1;
    result = i * i;
  }
  return i - 1;
}

