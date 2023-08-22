function f_gold(n) {
  var i = 1;
  var res = 0.0;
  var sign = true;
  while (n > 0) {
    n = n - 1;
    if (sign) {
      sign = false;
      res = res + (i + 1) / (i + 2);
      i = i + 2;
    } else {
      sign = true;
      res = res - (i + 1) / (i + 2);
      i = i + 2;
    }
  }
  return res;
}

