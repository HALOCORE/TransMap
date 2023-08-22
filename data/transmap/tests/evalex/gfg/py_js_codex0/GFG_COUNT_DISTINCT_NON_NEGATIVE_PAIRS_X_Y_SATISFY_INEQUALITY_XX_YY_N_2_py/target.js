function f_gold(n) {
  var res = 0;
  var x = 0;
  while (x * x < n) {
    var y = 0;
    while (x * x + y * y < n) {
      res = res + 1;
      y = y + 1;
    }
    x = x + 1;
  }
  return res;
}

