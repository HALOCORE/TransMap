function f_gold(n) {
  var k = n;
  var imin = 1;
  var ans = 0;
  while (imin <= n) {
    var imax = n / k;
    ans += k * (imax - imin + 1);
    imin = imax + 1;
    k = n / imin;
  }
  return ans;
}

