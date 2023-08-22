function f_gold(n) {
  var i = 0;
  var ans = 0;
  while ((1 << i) <= n) {
    var k = 0;
    var change = 1 << i;
    for (var j = 0; j <= n; j++) {
      ans += k;
      if (change == 1) {
        k = !k;
        change = 1 << i;
      } else change -= 1;
    }
    i += 1;
  }
  return ans;
}

