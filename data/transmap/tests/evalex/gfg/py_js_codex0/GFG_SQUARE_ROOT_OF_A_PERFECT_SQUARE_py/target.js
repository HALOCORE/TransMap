function f_gold(n) {
  var x = n;
  var y = 1;
  var e = 0.000001;
  while (x - y > e) {
    x = (x + y) / 2;
    y = n / x;
  }
  return x;
}

