function f_gold(m, n, a) {
  var val = 1;
  var k = 0;
  var l = 0;
  while(k < m && l < n) {
    for(var i = l;i < n;i++) {
      a[k][i] = val;
      val += 1;
    }
    k += 1;
    for(var i = k;i < m;i++) {
      a[i][n - 1] = val;
      val += 1;
    }
    n -= 1;
    if(k < m) {
      for(var i = n - 1;i > l - 1;i--) {
        a[m - 1][i] = val;
        val += 1;
      }
      m -= 1;
    }
    if(l < n) {
      for(var i = m - 1;i > k - 1;i--) {
        a[i][l] = val;
        val += 1;
      }
      l += 1;
    }
  }
}

