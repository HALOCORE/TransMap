function f_gold(x, y) {
  var res = 1;
  for (var i = 0; i < y; i++) res = (res * x) % 10;
  return res;
}

