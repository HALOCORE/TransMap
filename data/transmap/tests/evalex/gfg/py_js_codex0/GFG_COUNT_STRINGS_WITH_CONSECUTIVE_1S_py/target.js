function f_gold(n) {
  var a = Array(n).fill(0);
  var b = Array(n).fill(0);
  a[0] = b[0] = 1;
  for (var i = 1; i < n; i++) {
    a[i] = a[i - 1] + b[i - 1];
    b[i] = a[i - 1];
  }
  return (1 << n) - a[n - 1] - b[n - 1];
}

