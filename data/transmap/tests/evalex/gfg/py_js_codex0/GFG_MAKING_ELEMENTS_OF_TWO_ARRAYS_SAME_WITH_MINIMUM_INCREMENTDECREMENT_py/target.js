function f_gold(a, b, n) {
  a.sort(function (a, b) {
    return a - b;
  });
  b.sort(function (a, b) {
    return a - b;
  });
  var result = 0;
  for (var i = 0; i < n; i++) {
    if (a[i] > b[i]) result = result + Math.abs(a[i] - b[i]);else if (a[i] < b[i]) result = result + Math.abs(a[i] - b[i]);
  }
  return result;
}

