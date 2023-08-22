function f_gold(arr, n, k) {
  var i = 0;
  var l = 0;
  var r = 0;
  var res = 0;
  var thi = [];
  var pol = [];
  while (i < n) {
    if (arr[i] == 'P') pol.push(i);
    else if (arr[i] == 'T') thi.push(i);
    i += 1;
  }
  while (l < thi.length && r < pol.length) {
    if (Math.abs(thi[l] - pol[r]) <= k) {
      res += 1;
      l += 1;
      r += 1;
    } else if (thi[l] < pol[r]) l += 1;
    else r += 1;
  }
  return res;
}

