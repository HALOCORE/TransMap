function f_gold(m, n, a) {
  var k = 0;
  var l = 0;
  var stk = [];
  while(k <= m && l <= n) {
    for(var i = l;i <= n;i++) stk.push(a[k][i]);
    k++;
    for(var i = k;i <= m;i++) stk.push(a[i][n]);
    n--;
    if(k <= m) {
      for(var i = n;i >= l - 1;i--) stk.push(a[m][i]);
      m--;
    }
    if(l <= n) {
      for(var i = m;i >= k - 1;i--) stk.push(a[i][l]);
      l++;
    }
  }
  while(stk.length != 0) {
    console.log(stk[stk.length - 1], end = " ");
    stk.pop();
  }
}

