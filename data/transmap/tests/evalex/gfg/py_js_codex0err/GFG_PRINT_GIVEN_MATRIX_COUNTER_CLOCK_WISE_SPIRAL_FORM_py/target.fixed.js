function f_gold(m, n, arr) {
  var k = 0;
  var l = 0;
  var cnt = 0;
  var total = m * n;
  while (k < m && l < n) {
    if (cnt == total) break;
    for (var i = k; i < m; i++) {
      console.log(arr[i][l]);
      cnt += 1;
    }
    l += 1;
    if (cnt == total) break;
    for (var i = l; i < n; i++) {
      console.log(arr[m - 1][i]);
      cnt += 1;
    }
    m -= 1;
    if (cnt == total) break;
    if (k < m) {
      for (var i = m - 1; i > k - 1; i--) {
        console.log(arr[i][n - 1]);
        cnt += 1;
      }
      n -= 1;
    }
    if (cnt == total) break;
    if (l < n) {
      for (var i = n - 1; i > l - 1; i--) {
        console.log(arr[k][i]);
        cnt += 1;
      }
      k += 1;
    }
  }
}

