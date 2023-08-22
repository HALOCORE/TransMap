function f_gold(a, n, k) {
  var b = {};
  for (var i = 0; i < n; i++) {
    var x = a[i];
    var d = Math.min(1 + i, n - i);
    if (!(x in b)) b[x] = d;
    else b[x] = Math.min(d, b[x]);
  }
  var ans = 10 ** 9;
  for (var i = 0; i < n; i++) {
    var x = a[i];
    if (x != (k - x) && (k - x) in b) ans = Math.min(Math.max(b[x], b[k - x]), ans);
  }
  return ans;
}

