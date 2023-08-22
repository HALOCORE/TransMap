function f_gold(x) {
  var temp = x;
  var n = 0;
  while (x != 0) {
    x = Math.floor(x / 10);
    n = n + 1;
  }
  x = temp;
  var sm = 0;
  while (x != 0) {
    sm = sm + Math.pow(x % 10, n);
    x = Math.floor(x / 10);
  }
  return sm == temp;
}

