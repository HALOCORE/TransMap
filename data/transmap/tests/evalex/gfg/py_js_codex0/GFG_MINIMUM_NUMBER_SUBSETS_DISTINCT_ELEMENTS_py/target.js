function f_gold(ar, n) {
  var res = 0;
  ar.sort();
  for (var i = 0; i < n; i++) {
    var count = 1;
    for (var i = 0; i < n - 1; i++) {
      if (ar[i] == ar[i + 1]) count += 1;
      else break;
    }
    res = Math.max(res, count);
  }
  return res;
}

