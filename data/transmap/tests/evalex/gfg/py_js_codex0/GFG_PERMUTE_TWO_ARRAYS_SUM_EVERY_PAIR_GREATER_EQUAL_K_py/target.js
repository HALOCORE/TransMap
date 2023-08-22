function f_gold(a, b, n, k) {
  a.sort(function (a, b) {
    return b - a;
  });
  b.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    if (a[i] + b[i] < k) return false;
  }
  return true;
}

