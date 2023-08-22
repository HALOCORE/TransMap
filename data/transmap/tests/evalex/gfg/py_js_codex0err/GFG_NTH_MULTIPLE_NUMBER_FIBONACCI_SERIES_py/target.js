function f_gold(k, n) {
  var f1 = 0;
  var f2 = 1;
  var i = 2;
  while (i != 0) {
    var f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    if (f2 % k == 0) return n * i;
    i += 1;
  }
  return;
}

