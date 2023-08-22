function f_gold(n) {
  var res = 1;
  for (var i = n; i >= -1; i -= 2) {
    if (i == 0 || i == 1) return res;
    else res *= i;
  }
}

