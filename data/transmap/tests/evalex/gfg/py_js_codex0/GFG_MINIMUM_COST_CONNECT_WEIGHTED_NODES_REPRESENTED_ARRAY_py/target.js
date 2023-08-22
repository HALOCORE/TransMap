function f_gold(a, n) {
  var mn = Number.MAX_SAFE_INTEGER;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    mn = Math.min(a[i], mn);
    sum += a[i];
  }
  return mn * (sum - mn);
}

