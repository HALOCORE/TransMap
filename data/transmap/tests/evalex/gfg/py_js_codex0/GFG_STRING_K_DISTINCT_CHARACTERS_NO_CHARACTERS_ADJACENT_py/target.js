function f_gold(n, k) {
  var res = "";
  for (var i = 0; i < k; i++) res = res + String.fromCharCode(97 + i);
  var count = 0;
  for (var i = 0; i < n - k; i++) {
    res = res + String.fromCharCode(97 + count);
    count += 1;
    if (count == k) count = 0;
  }
  return res;
}

